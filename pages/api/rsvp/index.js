import { sendEmail } from "../../../lib/email";

const { GoogleSpreadsheet } = require("google-spreadsheet");

const SPREADSHEET_ID = "1YSSYKx_tjzl2HJwc22IE078o8I1pi-erIXi0UnOPauE";
const SHEET_TITLE = "rsvp";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const formatBoolean = (bool) => (bool ? "YES" : "NO");

export default async function rsvp(req, res) {
  switch (req.method) {
    case "POST": {
      const body = JSON.parse(req.body);

      // Hidden honeypot field for spambots
      if (body["hp-name"]) {
        res.status(405).end();
      }

      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      });
      await doc.loadInfo(); // loads document properties and worksheets

      const sheet = doc.sheetsByTitle[SHEET_TITLE];
      const rows = await sheet.getRows();
      const existingRow =
        rows.find((row) => row.id === body.id) ||
        rows.find((row) => row.email === body.email);

      if (existingRow) {
        Object.entries(body).forEach(([key, value]) => {
          if (key !== "id" && key in existingRow) {
            existingRow[key] = value;
          }
        });
        await existingRow.save();
      } else {
        await sheet.addRow(body);
      }

      console.log(req.rawHeaders);
      console.log(req.headers);
      console.log(req.headers["Accept-Language"]);

      if (body.email) {
        await sendEmail(body.email, {
          subject: "RSVP Confirmation | Dunja & Gustafs Wedding",
          html: `<h2>Thank you for responding!</h2>
          <p>
            If you need to change anything about your response, please do so by following
            <a href="${req.headers.origin}?rsvp_id=${
            existingRow?.id || body.id
          }">this</a> link and revisiting the RSVP section.
          <p>The deadline for doing so is: ....</p>
          </p>
          <p>Of course, you can also reach out directly.</p>
          <p>Please find your information below:</p>
          <ul>
            <li><b>Name:</b> ${body.name}</li>
            <li><b>Will join:</b> ${formatBoolean(body.status)}</li>
            ${
              body.status
                ? `<li><b>Plus </b>1: ${body.partner_name || "-"}</li>
              <li><b>Allergies:</b> ${body.allergies || "-"}</li>
              <li><b>Children:</b> ${body.number_of_children}</li>
              <li><b>Wedding photos:</b> ${formatBoolean(body.photos)}</li>
              <li><b>Help with hotel arrangement:</b> ${formatBoolean(
                body.hotel_arrangement
              )}</li>
              <li><b>Message:</b> ${body.message || "-"}</li>`
                : ""
            }
          </ul>
          `,
        });
      }

      res.status(200).end();
    }
    default: {
      return res.status(405).end();
    }
  }
}

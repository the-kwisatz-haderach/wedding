import { emailResponseCreators } from "../../../lib/createRsvpResponseEmail";
import { sendEmail } from "../../../lib/email";

const { GoogleSpreadsheet } = require("google-spreadsheet");

const SPREADSHEET_ID = "1YSSYKx_tjzl2HJwc22IE078o8I1pi-erIXi0UnOPauE";
const SHEET_TITLE = "rsvp";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

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
          if (key in existingRow) {
            existingRow[key] = value;
          }
        });
        await existingRow.save();
      } else {
        await sheet.addRow(body);
      }

      if (body.email) {
        await sendEmail(
          body.email,
          emailResponseCreators[body?.locale || "sv"](
            body,
            `${req.headers.origin}?rsvp_id=${existingRow?.id || body.id}`
          )
        );
      }

      res.status(200).end();
    }
    default: {
      return res.status(405).end();
    }
  }
}

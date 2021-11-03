const { GoogleSpreadsheet } = require("google-spreadsheet");

const SPREADSHEET_ID = "1YSSYKx_tjzl2HJwc22IE078o8I1pi-erIXi0UnOPauE";
const SHEET_TITLE = "rsvp";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default async function rsvp(req, res) {
  switch (req.method) {
    case "POST": {
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      });
      await doc.loadInfo(); // loads document properties and worksheets

      const sheet = doc.sheetsByTitle[SHEET_TITLE];
      const rows = await sheet.getRows();
      const body = JSON.parse(req.body);
      const existingRow = rows.find((row) => row.id === body.id);

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
      res.status(200).end();
    }
    default: {
      return res.status(405).end();
    }
  }
}

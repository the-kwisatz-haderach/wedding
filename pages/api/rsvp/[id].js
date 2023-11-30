const { GoogleSpreadsheet } = require('google-spreadsheet')

const SPREADSHEET_ID = '1YSSYKx_tjzl2HJwc22IE078o8I1pi-erIXi0UnOPauE'
const SHEET_TITLE = 'rsvp'

const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

export default async function rsvp(req, res) {
  switch (req.method) {
    case '': {
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      })
      await doc.loadInfo() // loads document properties and worksheets

      const { id } = req.query

      const sheet = doc.sheetsByTitle[SHEET_TITLE]
      const rows = await sheet.getRows()
      const existingRow = rows.find((row) => row.id === id)

      if (existingRow) {
        const {
          id,
          status,
          children,
          name,
          guests,
          email,
          photos,
          hotel_arrangement,
          message,
          number_of_children,
          partner_name,
          allergies,
        } = existingRow
        return res.status(200).json({
          id,
          status,
          children,
          name,
          guests,
          email,
          photos,
          hotel_arrangement,
          message,
          number_of_children,
          partner_name,
          allergies,
        })
      } else {
        res.status(404).end()
      }
    }
    default: {
      return res.status(405).end()
    }
  }
}

const formatBooleanSv = (bool) => (bool ? "JA" : "NEJ");
const formatBooleanHr = (bool) => (bool ? "DA" : "NE");

function createSwedishResponseEmail(body, updateLink) {
  return {
    subject: "RSVP Bekräftelse | Dunja & Gustafs Bröllop",
    html: `<h2>Tack för ditt svar!</h2>
    <p>Om du behöver ändra någon information i ditt svar går det bra att göra så via <a href="${updateLink}">DENNA</a> länk.</p>
    <p>Självklart går det också bra att höra av sig direkt till någon av oss.</p>
    <p>Se bara till att göra det innan <b>15 maj</b>!</p>
    </p>
    <p>Nedan ser du informationen vi mottagit:</p>
    <ul>
      <li><b>Namn:</b> ${body.name}</li>
      <li><b>Deltar:</b> ${formatBooleanSv(body.status)}</li>
      ${
        body.status
          ? `<li><b>Plus 1</b>: ${body.partner_name || "-"}</li>
        <li><b>Allergier:</b> ${body.allergies || "-"}</li>
        <li><b>Barn:</b> ${body.number_of_children || "-"}</li>
        <li><b>Vill ta del av bröllopsfoton:</b> ${formatBooleanSv(
          body.photos
        )}</li>
        <li><b>Vill ha hjälp med hotellarrangemang:</b> ${formatBooleanSv(
          body.hotel_arrangement
        )}</li>
        <li><b>Meddelande:</b> ${body.message || "-"}</li>`
          : ""
      }
    </ul>
    ${
      body.status
        ? `<p>Se nu till att passet inte gått ut och vaccinpasset är giltigt så ses vi i sommar!</p>
          <p><b>Spara datumet i Google Calendar <a href="">HÄR</a>.</b></p>`
        : ""
    }
    `,
  };
}

function createCroatianResponseEmail(body, updateLink) {
  return {
    subject: "RSVP Confirmation | Dunja & Gustafs Wedding",
    html: `<h2>Thank you for responding!</h2>
    <p>
      If you need to change anything about your response, please do so by following
      <a href="${updateLink}">this</a> link and revisiting the RSVP section.
    <p>The deadline for doing so is: ....</p>
    </p>
    <p>Of course, you can also reach out directly.</p>
    <p>Please find your information below:</p>
    <ul>
      <li><b>Name:</b> ${body.name}</li>
      <li><b>Will join:</b> ${formatBooleanHr(body.status)}</li>
      ${
        body.status
          ? `<li><b>Plus </b>1: ${body.partner_name || "-"}</li>
        <li><b>Allergies:</b> ${body.allergies || "-"}</li>
        <li><b>Children:</b> ${body.number_of_children}</li>
        <li><b>Wedding photos:</b> ${formatBooleanHr(body.photos)}</li>
        <li><b>Help with hotel arrangement:</b> ${formatBooleanHr(
          body.hotel_arrangement
        )}</li>
        <li><b>Message:</b> ${body.message || "-"}</li>`
          : ""
      }
    </ul>
    `,
  };
}

export const emailResponseCreators = {
  hr: createCroatianResponseEmail,
  sv: createSwedishResponseEmail,
};

const formatBooleanSv = (bool) => (bool ? "JA" : "NEJ");
const formatBooleanHr = (bool) => (bool ? "DA" : "NE");

function createSwedishResponseEmail(body, updateLink) {
  return {
    subject: "RSVP Bekräftelse | Dunja & Gustafs Bröllop",
    html: `<h2>Tack för ditt svar!</h2>
    <p>Om du behöver ändra någon information i ditt svar går det bra att göra så via <a href="${updateLink}">DENNA</a> länk.</p>
    <p>Självklart går det också bra att höra av sig direkt till någon av oss.</p>
    <p>Se bara till att göra det innan <b>30 maj</b>!</p>
    </p>
    <p>Nedan ser du informationen vi mottagit:</p>
    <ul>
      <li><b>Namn:</b> ${body.name}</li>
      <li><b>Deltar:</b> ${formatBooleanSv(body.status)}</li>
      ${
        body.status
          ? `<li><b>Sällskap</b>: ${body.partner_name || "-"}</li>
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
          <p><b>Spara datumet i Google Calendar <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MjgxNjhyYmRiMWljZ3VjcGt2djRqMnA2NWYgZ3VzdGFmbHVuZHN0cm9tOTBAbQ&tmsrc=gustaflundstrom90%40gmail.com">HÄR</a>.</b></p>`
        : ""
    }
    `,
  };
}

function createCroatianResponseEmail(body, updateLink) {
  return {
    subject: "RSVP Potvrda | Dunja & Gustafs Vjenčanje",
    html: `<h2>Hvala za tvoju potvrdu!</h2>
    <p>Ukoliko trebate promijeniti neku informaciju, možete to napraviti preko <a href="${updateLink}">OVOGA</a> linka.</p>
    <p>Naravno, možete se obratiti direktno nekome od nas.</p>
    <p>Molimo Vas ta potrebne promjene obavite do <b>30-og</b> svibnja!</p>
    </p>
    <p>Slijedeće informacije smo zaprimili:</p>
    <ul>
      <li><b>Ime:</b> ${body.name}</li>
      <li><b>Odgovor na poziv:</b> ${formatBooleanHr(body.status)}</li>
      ${
        body.status
          ? `<li><b>Pratnja</b>: ${body.partner_name || "-"}</li>
        <li><b>Alergije:</b> ${body.allergies || "-"}</li>
        <li><b>Djeca:</b> ${body.number_of_children || "-"}</li>
        <li><b>Želim dobili fotografije s vjenčanja:</b> ${formatBooleanHr(
          body.photos
        )}</li>
        <li><b>Želim pomoć s aranžmanom hotela:</b> ${formatBooleanHr(
          body.hotel_arrangement
        )}</li>
        <li><b>Poruka:</b> ${body.message || "-"}</li>`
          : ""
      }
    </ul>
    ${
      body.status
        ? `<p>Ono što preostaje je pripremiti putovnicu i vidimo se na ljeto!</p>
          <p><b>Spremite datum vjenčanja u svoj kalendar <a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MjgxNjhyYmRiMWljZ3VjcGt2djRqMnA2NWYgZ3VzdGFmbHVuZHN0cm9tOTBAbQ&tmsrc=gustaflundstrom90%40gmail.com">OVDJE</a>.</b></p>`
        : ""
    }
    `,
  };
}

export const emailResponseCreators = {
  hr: createCroatianResponseEmail,
  sv: createSwedishResponseEmail,
};

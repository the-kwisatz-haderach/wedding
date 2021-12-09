const formatBoolean = (bool) => (bool ? "YES" : "NO");

function createSwedishResponseEmail(body, updateLink) {
  return {
    subject: "RSVP Bekräftelse | Dunja & Gustafs Bröllop",
    html: `<h2>Tack för ditt svar!</h2>
    <p>
      If you need to change anything about your response, please do so by following
      <a href=""${updateLink}"">this</a> link and revisiting the RSVP section.
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
  };
}

export const emailResponseCreators = {
  hr: createCroatianResponseEmail,
  sv: createSwedishResponseEmail,
};

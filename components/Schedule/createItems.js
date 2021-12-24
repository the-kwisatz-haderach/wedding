export const before = (t) => [
  {
    symbol: "🏠",
    title: t("contentDayBeforeTitle_reception"),
    time: "TBD",
    link: "https://www.google.com/maps/place/43%C2%B023'12.7%22N+17%C2%B035'28.4%22E/@43.3868739,17.5906666,19z/data=!3m1!4b1!4m2!3m1!1s0x0:0x53f8461e8b3bd597",
    linkLabel: t("showOnGoogleMaps", { ns: "common" }),
    description: t("contentDayBeforeDescription_reception"),
  },
];

export const weddingDay = (t) => [
  {
    symbol: "⛪",
    title: t("contentWeddingDayTitle_church"),
    time: "TBD",
    linkLabel: t("showOnGoogleMaps", { ns: "common" }),
    link: "https://www.google.com/maps/place/Franciscan+Monastery/@43.3742976,17.5891542,15z/data=!4m5!3m4!1s0x0:0xc31ae18cdb904a08!8m2!3d43.3742976!4d17.5891542",
    description: t("contentWeddingDayDescription_church"),
  },
  {
    symbol: "🪗",
    title: t("contentWeddingDayTitle_lunch"),
    time: "TBD",
    linkLabel: t("showOnGoogleMaps", { ns: "common" }),
    link: "https://www.google.com/maps/place/Mari%C4%87a+Gaj/@43.3394715,17.4322487,15z/data=!4m2!3m1!1s0x0:0xeff230c777cb16e3?sa=X&ved=2ahUKEwirofe5s_z0AhUP-aQKHYQ2CDwQ_BJ6BAgzEAU",
    description: t("contentWeddingDayDescription_lunch"),
  },
  {
    symbol: "🍽️",
    title: t("contentWeddingDayTitle_dinner"),
    time: "TBD",
    description: t("contentWeddingDayDescription_dinner"),
  },
  {
    symbol: "🎉",
    title: t("contentWeddingDayTitle_party"),
    time: "TBD",
    description: t("contentWeddingDayDescription_party"),
  },
  {
    symbol: "🚌",
    title: t("contentWeddingDayTitle_transport"),
    time: "TBD",
    description: t("contentWeddingDayDescription_transport"),
  },
];

export const after = (t) => [
  {
    symbol: "🍲",
    title: t("contentDayAfterTitle_lunch"),
    time: "TBD",
    link: "http://google.se",
    linkLabel: t("showOnGoogleMaps", { ns: "common" }),
    description: t("contentDayAfterDescription_lunch"),
  },
];

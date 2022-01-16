import sarajevo from "../../images/sarajevo.jpeg";
import split from "../../images/split.jpeg";
import sirokiBrijeg from "../../images/siroki-brijeg.jpeg";
import mostar from "../../images/mostar.jpeg";
import makarska from "../../images/makarska.jpeg";
import dubrovnik from "../../images/dubrovnik.jpeg";

export const before = (t) => [
  {
    title: "Via Split",
    description: t("travelToSirokiDescription"),
    imageSrc: split,
    imageAlt: "split",
    link: "https://www.momondo.se/flight-search/STO-SPU/2022-07-08?sort=bestflight_a",
    linkLabel: t("findFlights"),
  },
  {
    title: "Via Sarajevo",
    description: t("travelToSarajevoDescription"),
    imageSrc: sarajevo,
    imageAlt: "sarajevo",
    link: "https://www.momondo.se/flight-search/STO-SJJ/2022-07-08?sort=bestflight_a",
    linkLabel: t("findFlights"),
  },
];

export const after = (t) => [
  {
    title: "Široki Brijeg",
    description: t("exploreSirokiDescription"),
    imageSrc: sirokiBrijeg,
    imageAlt: "siroki brijeg",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g2548620-Siroki_Brijeg_West_Herzegovina_Canton_Federation_of_Bosnia_and_Herzegovina-Vacations.html",
  },
  {
    title: "Mostar",
    description: t("exploreMostarDescription"),
    imageAlt: "mostar",
    imageSrc: mostar,
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g295388-Mostar_Herzegovina_Neretva_Canton_Federation_of_Bosnia_and_Herzegovina-Vacations.html",
  },
  {
    title: "Sarajevo",
    description: t("exploreSarajevoDescription"),
    imageSrc: sarajevo,
    imageAlt: "sarajevo",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g295370-Split_Split_Dalmatia_County_Dalmatia-Vacations.html",
  },
  {
    title: "Split",
    description: t("exploreSplitDescription"),
    imageSrc: split,
    imageAlt: "split",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://visitsplit.com/en/1/welcome-to-split",
  },
  {
    title: "Makarska",
    description: t("exploreMakarskaDescription"),
    imageSrc: makarska,
    imageAlt: "makarska",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://makarska.hr/",
  },
  {
    title: "Dubrovnik",
    description: t("exploreDubrovnikDescription"),
    imageSrc: dubrovnik,
    imageAlt: "dubrovnik",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://visitdubrovnik.hr/",
  },
];

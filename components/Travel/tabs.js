import sarajevo from "../../images/sarajevo.jpeg";
import split from "../../images/split.jpeg";
import sirokiBrijeg from "../../images/siroki-brijeg.jpeg";
import mostar from "../../images/mostar.jpeg";

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
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    imageSrc: sirokiBrijeg,
    imageAlt: "siroki brijeg",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g2548620-Siroki_Brijeg_West_Herzegovina_Canton_Federation_of_Bosnia_and_Herzegovina-Vacations.html",
  },
  {
    title: "Mostar",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    imageAlt: "mostar",
    imageSrc: mostar,
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g295388-Mostar_Herzegovina_Neretva_Canton_Federation_of_Bosnia_and_Herzegovina-Vacations.html",
  },
  {
    title: "Split",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    imageSrc: split,
    imageAlt: "split",
    linkLabel: t("readMore", { ns: "common" }),
    link: "https://www.tripadvisor.com/Tourism-g295370-Split_Split_Dalmatia_County_Dalmatia-Vacations.html",
  },
];

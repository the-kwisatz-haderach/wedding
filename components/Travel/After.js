import { useTranslation } from "next-i18next";
import AlternatingList from "../AlternatingList/AlternatingList";

export const After = () => {
  const { t } = useTranslation(["travel", "common"]);
  return (
    <AlternatingList
      items={[
        {
          title: "Široki Brijeg",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
          imageAlt: "split",
          linkLabel: t("readMore", { ns: "common" }),
          link: "https://www.momondo.se/flight-search/STO-SPU/2022-07-08?sort=bestflight_a",
        },
        {
          title: "Mostar",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
          imageAlt: "sarajevo",
          linkLabel: t("readMore", { ns: "common" }),
          link: "https://www.momondo.se/flight-search/STO-SPU/2022-07-08?sort=bestflight_a",
        },
        {
          title: "Split",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
          imageAlt: "sarajevo",
          linkLabel: t("readMore", { ns: "common" }),
          link: "https://www.momondo.se/flight-search/STO-SPU/2022-07-08?sort=bestflight_a",
        },
      ]}
    />
  );
};

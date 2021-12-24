import split from "../../images/split.jpeg";
import sarajevo from "../../images/sarajevo.jpeg";
import AlternatingList from "../AlternatingList/AlternatingList";
import { useTranslation } from "next-i18next";

export const Before = () => {
  const { t } = useTranslation("travel");
  return (
    <AlternatingList
      items={[
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
      ]}
    />
  );
};

import { useTranslation } from "next-i18next";
import { before, after } from "./tabs";
import Tabs from "../Tabs/Tabs";
import AlternatingList from "../AlternatingList/AlternatingList";

const createTabs = (t) => [
  {
    label: t("tabLabelTravelToWedding"),
    Content: () => <AlternatingList items={before(t)} />,
  },
  {
    label: t("tabLabelVacation"),
    Content: () => <AlternatingList items={after(t)} />,
  },
];

export default function Travel() {
  const { t } = useTranslation(["travel", "common"]);
  const tabs = createTabs(t);
  return <Tabs tabs={tabs} />;
}

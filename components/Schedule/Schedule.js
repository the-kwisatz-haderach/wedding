import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import Tabs from "../Tabs/Tabs";
import TimelineComponent from "../Timeline/Timeline";
import { weddingDay, before, after } from "./createItems";

const createTabs = (t) => [
  {
    label: t("tabLabelBefore"),
    Content: () => <TimelineComponent color="red.500" items={before(t)} />,
    timestamp: 0,
  },
  {
    label: t("tabLabelWeddingDay"),
    Content: () => <TimelineComponent color="red.500" items={weddingDay(t)} />,
    timestamp: Date.parse("2022-07-09"),
  },
  {
    label: t("tabLabelDayAfter"),
    Content: () => <TimelineComponent color="red.500" items={after(t)} />,
    timestamp: Date.parse("2022-07-10"),
  },
];

const getDefaultIndex = (tabs) => {
  const currentDate = Date.now();
  return (
    tabs.length -
    1 -
    [...tabs].reverse().findIndex((tab) => tab.timestamp < currentDate)
  );
};

export default function Schedule() {
  const { t } = useTranslation(["schedule", "common"]);
  const tabs = useMemo(() => createTabs(t), [t]);
  const defaultIndex = useMemo(() => getDefaultIndex(tabs), [tabs]);
  return <Tabs defaultIndex={defaultIndex} tabs={tabs} />;
}

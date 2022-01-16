import React, { useMemo } from "react";
import { useTranslation } from "next-i18next";
import Tabs from "../Tabs/Tabs";
import TimelineComponent from "../Timeline/Timeline";
import { weddingDay, before, after } from "./createItems";
import { useRouter } from "next/router";

const createTabs = (t, locale) => [
  // {
  //   label: t("tabLabelBefore"),
  //   Content: () => <TimelineComponent color="red.500" items={before(t)} />,
  //   timestamp: 0,
  // },
  {
    label: t("tabLabelWeddingDay"),
    Content: () => (
      <TimelineComponent color="red.500" items={weddingDay(t, locale)} />
    ),
    // timestamp: Date.parse("2022-07-09"),
    timestamp: 0,
  },
  {
    label: t("tabLabelDayAfter"),
    Content: () => (
      <TimelineComponent color="red.500" items={after(t, locale)} />
    ),
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
  const { locale } = useRouter();
  const { t } = useTranslation(["schedule", "common"]);
  const tabs = useMemo(() => createTabs(t, locale), [t, locale]);
  const defaultIndex = useMemo(() => getDefaultIndex(tabs), [tabs]);
  return <Tabs defaultIndex={defaultIndex} tabs={tabs} />;
}

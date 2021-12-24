import React from "react";
import { Box } from "@chakra-ui/react";
import Tabs from "../Tabs/Tabs";
import { WeddingDayContent } from "./WeddingDayContent";
import { DayAfterWeddingContent } from "./DayAfterWeddingContent";
import { BeforeWeddingContent } from "./BeforeWeddingContent";

const tabs = [
  {
    label: "Days before the wedding",
    Content: BeforeWeddingContent,
    timestamp: 0,
  },
  {
    label: "9 July - Wedding Day",
    Content: WeddingDayContent,
    timestamp: Date.parse("2022-07-09"),
  },
  {
    label: "10 July - Day after",
    Content: DayAfterWeddingContent,
    timestamp: Date.parse("2022-07-10"),
  },
];

const getDefaultIndex = () => {
  const currentDate = Date.now();
  return (
    tabs.length -
    1 -
    [...tabs].reverse().findIndex((tab) => tab.timestamp < currentDate)
  );
};

export default function Schedule() {
  return (
    <Box>
      <Tabs defaultIndex={getDefaultIndex()} tabs={tabs} />
    </Box>
  );
}

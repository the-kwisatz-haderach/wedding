import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Before } from "./Before";
import { After } from "./After";

const createTabs = (t) => [
  {
    label: "Traveling to Široki Brijeg",
    Content: Before,
  },
  {
    label: "Vacationing after the wedding",
    Content: After,
  },
];

export default function Travel() {
  const { t } = useTranslation();
  const tabs = createTabs(t);
  return (
    <Tabs isFitted isLazy variant="enclosed">
      <TabList mb="1em">
        {tabs.map(({ label }) => (
          <Tab key={label}>{label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(({ Content, label }) => (
          <TabPanel key={label}>
            <Content />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

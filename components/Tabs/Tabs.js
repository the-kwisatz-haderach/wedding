import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
} from "@chakra-ui/react";

export default function Tabs({
  tabs = [{ Content: () => <></>, label: "" }],
  defaultIndex = 0,
}) {
  return (
    <ChakraTabs
      defaultIndex={defaultIndex}
      isFitted
      isLazy
      variant="line"
      colorScheme="red"
    >
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
    </ChakraTabs>
  );
}

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
      variant="solid-rounded"
      colorScheme="red"
    >
      <TabList
        mb="1em"
        overflowY="hidden"
        overflowX="auto"
        className="hide-scrollbar"
        px={4}
        mx={-4}
        h={16}
        style={{
          scrollSnapType: "x proximity",
        }}
      >
        {tabs.map(({ label }) => (
          <Tab
            width="100%"
            flexShrink={0}
            key={label}
            minW={210}
            style={{
              scrollSnapAlign: "center",
            }}
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(({ Content, label }) => (
          <TabPanel key={label} p={0}>
            <Content />
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
}

import { Box } from "@chakra-ui/layout";
import React from "react";
import SectionLink from "./SectionLink";

export default function SectionMenu({ sections }) {
  return (
    <Box
      position="sticky"
      zIndex={10}
      top={0}
      backgroundColor="white"
      borderBottom="1px solid rgba(0,0,0,0.1)"
      height="70px"
      display="flex"
      overflowX="scroll"
      className="hide-scrollbar"
      alignItems="center"
      justifyContent={["flex-start", "flex-start", "center"]}
    >
      <Box w="fit-content" display="flex">
        {sections.map((section) => (
          <SectionLink key={section.id} id={section.id}>
            {section.label}
          </SectionLink>
        ))}
      </Box>
    </Box>
  );
}

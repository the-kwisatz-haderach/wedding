import { Box } from "@chakra-ui/layout";
import React from "react";
import SectionLink from "./SectionLink";

export default function SectionMenu({ sections }) {
  return (
    <Box
      position="sticky"
      zIndex={100}
      top={0}
      backgroundColor="white"
      boxShadow="0 20px 45px -25px #0000001c"
      height="70px"
      display="flex"
      overflowX="scroll"
      className="hide-scrollbar"
      alignItems="center"
      justifyContent={["flex-start", "flex-start", "center"]}
    >
      <Box w="fit-content" display="flex">
        {sections.map((section, index) => (
          <SectionLink key={section.id} id={section.id} index={index}>
            {section.label}
          </SectionLink>
        ))}
      </Box>
    </Box>
  );
}

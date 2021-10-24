import { Box } from "@chakra-ui/layout";
import React from "react";
import SectionLink from "./SectionLink";

export default function SectionMenu({ sections }) {
  return (
    <Box
      position="sticky"
      top={-1}
      backgroundColor="white"
      borderTop="1px solid rgba(0,0,0,0.1)"
      borderBottom="1px solid rgba(0,0,0,0.1)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={50}
    >
      {sections.map((section) => (
        <SectionLink key={section.id} id={section.id}>
          {section.label}
        </SectionLink>
      ))}
    </Box>
  );
}

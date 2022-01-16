import React from "react";
import { Box } from "@chakra-ui/react";

export default function DressCode() {
  return (
    <Box
      transform="translateX(-100vw)"
      transition="transform 0.8s ease-in-out"
      backgroundColor="white"
      borderRadius={20}
      boxShadow="5px 20px 40px -15px #00000026"
      pt={2}
      pb={4}
    >
      TEST
    </Box>
  );
}

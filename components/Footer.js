import React from "react";
import { Box, Text } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Box
      as="footer"
      textAlign="center"
      px="2rem"
      py="3rem"
      color="white"
      borderTop="3px solid #e73335"
      backgroundColor="#f57373"
    >
      <Text>Copyright Ⓒ Gustaf Lundström</Text>
    </Box>
  );
}

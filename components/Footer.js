import React from "react";
import { Box, Link, Text } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Box
      as="footer"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="space-between"
      alignItems="flex-end"
      px="2rem"
      py="3rem"
      display="flex"
      color="white"
      borderTop="3px solid #e73335"
      backgroundColor="#f57373"
    >
      <Text fontSize="sm" mr="1rem">
        Icons made by{" "}
        <Link isExternal href="https://www.freepik.com" title="Freepik">
          Freepik
        </Link>{" "}
        from{" "}
        <Link isExternal href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Link>
      </Text>
      <Text fontSize="sm">
        <Link isExternal href="https://www.freepik.com/vectors/flower">
          Flower vector created by asrulaqroni - www.freepik.com
        </Link>
      </Text>
    </Box>
  );
}

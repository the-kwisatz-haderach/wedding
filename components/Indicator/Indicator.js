import React from "react";
import { Spinner } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";

export default function Indicator({ isLoading }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="60px"
      w="60px"
      borderRadius="50%"
      backgroundColor="green.300"
      mb={5}
    >
      {isLoading ? (
        <Spinner color="white" />
      ) : (
        <CheckIcon color="white" fontSize="xl" />
      )}
    </Box>
  );
}

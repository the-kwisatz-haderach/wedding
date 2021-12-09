import React from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";

export default function Indicator() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h={16}
      w={16}
      borderRadius="50%"
      backgroundColor="green.300"
      mb={5}
    >
      <CheckIcon color="white" fontSize="xl" />
    </Flex>
  );
}

import React from "react";
import Image from "next/image";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import swedishFlag from "../../images/sweden.png";
import croatianFlag from "../../images/croatia.png";

const phrases = [
  {
    phrase: "Goddag",
    translation: "Dobar dan",
  },
  {
    phrase: "Tack",
    translation: "Hvala",
  },
];

export default function Phrases() {
  return (
    <Box
      backgroundColor="white"
      borderRadius={20}
      boxShadow="5px 20px 40px -15px #00000026"
      pt={2}
      pb={4}
    >
      <Flex flexWrap="wrap" justifyContent="space-between" px={[4, 10]} py={6}>
        <Flex alignItems="center">
          <Image src={swedishFlag} width={30} height={30} alt="Swedish flag" />
          <Text ml={3} fontWeight="bold">
            Svenska
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Text mr={3} fontWeight="bold">
            Hrvatski
          </Text>
          <Image
            src={croatianFlag}
            width={30}
            height={30}
            alt="Croatian flag"
          />
        </Flex>
      </Flex>
      <Flex flexDir="column">
        {phrases.map((phrase) => (
          <React.Fragment key={phrase.phrase}>
            <Divider />
            <Flex
              px={[4, 10]}
              py={5}
              key={phrase.phrase}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Text>{phrase.phrase}</Text>
              <Text>{phrase.translation}</Text>
            </Flex>
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}

import Image from "next/image";
import {
  Box,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import split from "../../images/split.jpeg";
import sarajevo from "../../images/sarajevo.jpeg";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Before = () => {
  return (
    <VStack align="stretch" spacing={10} divider={<Divider />}>
      <Stack direction={["column", "column", "row"]} alignItems="flex-start">
        <Box
          height="100%"
          width="100%"
          flex={1}
          mb={[2, 2, 0]}
          mr={[0, 0, 5]}
          position="relative"
          borderRadius={5}
          overflow="hidden"
          boxShadow="0px 20px 30px -20px black"
        >
          <Image src={split} alt="split" layout="responsive" />
        </Box>
        <Box py={2} flex={2} width="100%">
          <Heading>Via Split</Heading>
          <Text my={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link
            color="red.500"
            fontWeight="bold"
            href="https://www.momondo.se/flight-search/STO-SPU/2022-07-08?sort=bestflight_a"
            isExternal
          >
            Find flights
            <ExternalLinkIcon fontSize="lg" mb={1} ml={1} />
          </Link>
        </Box>
      </Stack>
      <Stack direction={["column", "column", "row"]} alignItems="flex-start">
        <Box
          height="100%"
          width="100%"
          flex={1}
          order={[-1, -1, 1]}
          mb={[2, 2, 0]}
          ml={[0, 0, 5]}
          position="relative"
          borderRadius={5}
          overflow="hidden"
          boxShadow="0px 20px 30px -20px black"
        >
          <Image src={sarajevo} alt="sarajevo" layout="responsive" />
        </Box>
        <Box py={2} flex={2} width="100%" mt={[4, 4, 0]}>
          <Heading>Via Sarajevo</Heading>
          <Text my={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Link
            color="red.500"
            fontWeight="bold"
            href="https://www.momondo.se/flight-search/STO-SJJ/2022-07-08?sort=bestflight_a"
            isExternal
          >
            Find flights
            <ExternalLinkIcon fontSize="lg" mb={1} ml={1} />
          </Link>
        </Box>
      </Stack>
    </VStack>
  );
};

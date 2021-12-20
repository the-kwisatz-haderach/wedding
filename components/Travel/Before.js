import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";

export const Before = () => {
  return (
    <VStack align="stretch" spacing={10}>
      <Stack direction={["column", "column", "row"]} alignItems="flex-start">
        <Box
          width="100%"
          bgColor="blue"
          h={200}
          flex={1}
          mb={[2, 2, 0]}
          mr={[0, 0, 5]}
        >
          Text
        </Box>
        <Box flex={2} width="100%">
          <Heading>Via Split</Heading>
          <Text>lorem ipsum</Text>
        </Box>
      </Stack>
      <Stack direction={["column", "column", "row"]} alignItems="flex-start">
        <Box flex={2} width="100%" mt={[4, 4, 0]}>
          <Heading>Via Sarajevo</Heading>
          <Text>lorem ipsum</Text>
        </Box>
        <Box
          order={[-1, -1, 0]}
          width="100%"
          bgColor="blue"
          h={200}
          flex={1}
          ml={[0, 0, 5]}
        >
          Text
        </Box>
      </Stack>
    </VStack>
  );
};

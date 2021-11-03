import { Button } from "@chakra-ui/button";
import Image from "next/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import pin from "../../images/love_pin.png";

export const Pin = ({ title = "", text }) => (
  <Box width={70} height={70} position="relative">
    <Image src={pin} layout="fill" />
  </Box>
);

{
  /* <Box
    backgroundColor="white"
    py={3}
    px={4}
    w="max"
    boxShadow="lg"
    borderRadius="lg"
    cursor="initial"
  >
    <Image src={pin} width={100} height={100} />
    <Stack spacing={1}>
      <Text fontSize="md">{title}</Text>
      <Text>{text}</Text>
      <Button variant="link">LOL</Button>
    </Stack>
  </Box> */
}

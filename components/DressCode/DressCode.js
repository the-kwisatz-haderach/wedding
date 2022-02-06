import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import dressCodeMan from "../../images/wedding-suit.png";
import dressCodeWoman from "../../images/wedding-dress.png";
import swimSuitWoman from "../../images/swimming-suit_fem.png";
import swimSuitMan from "../../images/swimming-suit.png";
import { useTranslation } from "next-i18next";

export default function DressCode() {
  const { t } = useTranslation("dressCode");
  return (
    <VStack
      spacing={10}
      p={10}
      border="1px solid rgba(0,0,0,0.05)"
      borderRadius="25px"
      boxShadow="xl"
      divider={<Divider />}
      maxWidth={600}
      margin="auto"
    >
      <VStack>
        <Text mb={5} fontSize="4xl" textAlign="center">
          {t("jacket")}
        </Text>
        <HStack spacing={10}>
          <Box width={[16, 20]} height={[16, 20]} position="relative">
            <Image
              src={dressCodeWoman}
              alt="Dress code"
              width={80}
              height={80}
            />
          </Box>
          <Box width={[16, 20]} height={[16, 20]} position="relative">
            <Image src={dressCodeMan} alt="Dress code" width={80} height={80} />
          </Box>
        </HStack>
      </VStack>
      <VStack>
        <Text mb={5} textAlign="center" fontSize={["sm", "md"]}>
          {t("bathing_clothes")}
        </Text>
        <HStack spacing={10}>
          <Box width={[16, 20]} height={[16, 20]} position="relative">
            <Image src={swimSuitWoman} alt="Dress code" layout="responsive" />
          </Box>
          <Box width={[16, 20]} height={[16, 20]} position="relative">
            <Image src={swimSuitMan} alt="Dress code" layout="responsive" />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
}

import React from "react";
import Image from "next/image";
import { Divider, Stack, VStack, Box, Heading, Text } from "@chakra-ui/react";
import ExternalLink from "../ExternalLink/ExternalLink";

export default function AlternatingList({
  items = [
    {
      title: "",
      description: "",
      imageSrc: "",
      imageAlt: "",
      link: "",
      linkLabel: "",
    },
  ],
}) {
  return (
    <VStack align="stretch" spacing={10} divider={<Divider />}>
      {items.map(
        (
          { title, description, imageSrc, imageAlt, link, linkLabel },
          index
        ) => (
          <Stack
            key={index}
            alignItems="flex-start"
            spacing={10}
            direction={
              index % 2 === 0
                ? ["column", "column", "row-reverse"]
                : ["column", "column", "row"]
            }
          >
            {imageSrc && (
              <Box
                height="100%"
                width="100%"
                flex={1}
                mb={[2, 2, 0]}
                position="relative"
                borderRadius={5}
                overflow="hidden"
                boxShadow="0px 20px 30px -20px black"
              >
                <Image src={imageSrc} alt={imageAlt} layout="responsive" />
              </Box>
            )}
            <Box py={2} flex={2} width="100%">
              <Heading>{title}</Heading>
              <Text my={3}>{description}</Text>
              {link && <ExternalLink href={link}>{linkLabel}</ExternalLink>}
            </Box>
          </Stack>
        )
      )}
    </VStack>
  );
}

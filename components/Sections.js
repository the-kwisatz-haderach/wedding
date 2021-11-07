import React from "react";
import Image from "next/image";
import { Box, Container, Heading } from "@chakra-ui/layout";
import SectionMenu from "./SectionMenu";

export default function Sections({ sections }) {
  return (
    <>
      <SectionMenu
        sections={sections.map(({ id, label }) => ({ id, label }))}
      />
      <Box backgroundColor="white">
        {sections.map(({ contained = false, id, content, label, imgSrc }) => (
          <Box
            key={id}
            className="alternate"
            id={id}
            paddingBottom="6rem"
            paddingTop="3rem"
          >
            <Container
              maxW="container.lg"
              display="flex"
              alignItems="flex-end"
              justifyContent={["center", "center", "flex-start"]}
              py={8}
              marginBottom={3}
            >
              <Image src={imgSrc} width={60} height={60} alt="Rings" />
              <Heading marginLeft={6} size="xl" textTransform="capitalize">
                {label}
              </Heading>
            </Container>
            <Container
              maxW={contained ? "container.lg" : "none"}
              padding={contained ? undefined : 0}
            >
              {content}
            </Container>
          </Box>
        ))}
      </Box>
    </>
  );
}

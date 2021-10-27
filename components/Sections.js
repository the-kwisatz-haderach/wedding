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
          <div key={id}>
            <Container
              maxW="container.xl"
              display="flex"
              alignItems="center"
              py={8}
            >
              <Image src={imgSrc} width={60} height={60} alt="Rings" />
              <Heading marginLeft={4} size="xl">
                {label}
              </Heading>
            </Container>
            <Container maxW={contained ? "container.xl" : "none"}>
              {content}
            </Container>
          </div>
        ))}
      </Box>
    </>
  );
}

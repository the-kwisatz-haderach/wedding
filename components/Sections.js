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
            justifyContent="center"
            py={8}
            marginBottom={3}
          >
            <Box
              width={["60px", "60px", "70px", "90px"]}
              height="auto"
              position="relative"
            >
              <Image
                src={imgSrc}
                width={60}
                height={60}
                alt="Rings"
                layout="responsive"
              />
            </Box>
            <Heading marginLeft={10} size="3xl" textTransform="capitalize">
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
    </>
  );
}

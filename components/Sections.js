import React from "react";
import Image from "next/image";
import { Text, Box, Container, Heading } from "@chakra-ui/layout";
import SectionMenu from "./SectionMenu";

export default function Sections({ sections }) {
  return (
    <Box height="inherit">
      <SectionMenu
        sections={sections.map(({ id, label }) => ({ id, label }))}
      />
      {sections.map(
        ({ contained = false, id, Content, label, imgSrc, preamble = "" }) => (
          <Box
            key={id}
            className="alternate"
            id={id}
            paddingBottom="6rem"
            paddingTop="3rem"
            overflow="hidden"
          >
            <Container
              maxW="container.lg"
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              py={8}
              marginBottom={3}
            >
              {imgSrc && (
                <Box
                  marginRight={[6, 10]}
                  width={["60px", "60px", "70px", "90px"]}
                  height="auto"
                  position="relative"
                >
                  <Image
                    src={imgSrc}
                    loading="eager"
                    width={60}
                    height={60}
                    alt="Rings"
                    layout="responsive"
                  />
                </Box>
              )}
              <Heading size="3xl" textTransform="capitalize">
                {label}
              </Heading>
            </Container>
            <Container
              maxW={contained ? "container.lg" : "none"}
              padding={contained ? undefined : 0}
            >
              {preamble && (
                <Text textAlign="center" mb={7}>
                  {preamble}
                </Text>
              )}
              <Content />
            </Container>
          </Box>
        )
      )}
    </Box>
  );
}

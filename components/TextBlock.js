import React from "react";
import { Container, Heading, Text } from "@chakra-ui/layout";

export default function TextBlock({ title, description }) {
  return (
    <Container maxW="2xl" textAlign="center" marginTop={5}>
      <Heading className="gradient-text" marginBottom={5} fontSize="4rem">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Container>
  );
}

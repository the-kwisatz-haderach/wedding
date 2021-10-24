import React from "react";
import { Container, Heading, Text } from "@chakra-ui/layout";

export default function TextBlock({ title, description }) {
  return (
    <Container maxW="xl" textAlign="center" marginTop={5}>
      <Heading className="gradient-text" marginBottom={5} size="4xl">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Container>
  );
}

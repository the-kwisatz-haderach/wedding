import React, { Fragment } from "react";
import { Container } from "@chakra-ui/layout";
import SectionMenu from "./SectionMenu";

export default function Sections({ sections }) {
  return (
    <>
      <SectionMenu
        sections={sections.map(({ id, label }) => ({ id, label }))}
      />
      <Container
        as="main"
        maxW="container.xl"
        backgroundColor="white"
        zIndex={10}
      >
        {sections.map(({ id, content }) => (
          <Fragment key={id}>{content}</Fragment>
        ))}
      </Container>
    </>
  );
}

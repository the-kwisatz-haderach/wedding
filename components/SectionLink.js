import React from "react";
import { Button } from "@chakra-ui/react";

export default function SectionLink({ children, id, index }) {
  const onClick = () => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <Button
      marginRight={2}
      colorScheme={index > 0 ? undefined : "red"}
      variant={index > 0 ? "ghost" : "solid"}
      size="lg"
      onClick={onClick}
      textTransform="capitalize"
    >
      {children}
    </Button>
  );
}

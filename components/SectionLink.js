import React from "react";
import { Button } from "@chakra-ui/react";

export default function SectionLink({ children, id, index }) {
  const onClick = () => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <Button
      marginRight={2}
      marginLeft={index > 0 ? undefined : 2}
      colorScheme={index > 0 ? undefined : "red"}
      variant={index > 0 ? "ghost" : "solid"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

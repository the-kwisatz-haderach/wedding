import React from "react";
import { Button } from "@chakra-ui/react";

export default function SectionLink({ children, id, isActive }) {
  const onClick = () => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    if (history.pushState) {
      history.pushState(null, null, `#${id}`);
    } else {
      location.hash = id;
    }
  };

  return (
    <Button variant="ghost" onClick={onClick}>
      {children}
    </Button>
  );
}

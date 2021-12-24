import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

export default function ExternalLink({ href = "", children = "" }) {
  return (
    <Link
      fontWeight="bold"
      isExternal
      color="red.500"
      href={href}
      pointerEvents="all"
    >
      {children}
      <ExternalLinkIcon fontSize="lg" mb={1} ml={2} />
    </Link>
  );
}

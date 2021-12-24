import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/react";

export default function ExternalLink({ href = "", children = "" }) {
  return (
    <Link
      fontWeight="bold"
      isExternal
      color="red.500"
      href={href}
      pointerEvents="all"
    >
      <Box
        display="inline-block"
        sx={{
          "&::first-letter": {
            textTransform: "uppercase",
          },
        }}
      >
        {children}
      </Box>
      <ExternalLinkIcon fontSize="lg" mb={1} ml={2} />
    </Link>
  );
}

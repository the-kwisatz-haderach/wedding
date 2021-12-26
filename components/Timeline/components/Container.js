import React from "react";
import { Box } from "@chakra-ui/react";

export function Container({ children }) {
  return (
    <Box
      maxWidth="800px"
      margin="auto"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{
        "& > *:not(:last-child)": {
          marginBottom: 8,
        },
        "& > *:last-child": {
          marginTop: 8,
        },
      }}
    >
      {children}
    </Box>
  );
}

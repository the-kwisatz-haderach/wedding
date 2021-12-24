import React from "react";
import { Box } from "@chakra-ui/react";

export function Container({ children, color = "" }) {
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
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translateX(50%) translateY(75px)",
          width: "100%",
          height: "calc(100% - 150px)",
          zIndex: -1,
          borderLeftWidth: 4,
          borderLeftStyle: "solid",
          borderLeftColor: color,
        },
      }}
    >
      {children}
    </Box>
  );
}

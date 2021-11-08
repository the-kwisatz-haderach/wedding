import { Box } from "@chakra-ui/layout";
import React from "react";

export default function Footer() {
  return (
    <Box
      as="footer"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="flex-end"
      style={{
        padding: "2rem",
        display: "flex",
        color: "white",
        backgroundColor: "#f57373",
      }}
    >
      <div
        style={{
          marginRight: "1rem",
        }}
      >
        Icons made by{" "}
        <a
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noreferrer"
        >
          www.flaticon.com,
        </a>
      </div>
      <a href="https://www.freepik.com/vectors/flower">
        Flower vector created by asrulaqroni - www.freepik.com
      </a>
    </Box>
  );
}

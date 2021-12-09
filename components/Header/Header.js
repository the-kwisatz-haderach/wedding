import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/layout";
import { Backdrop } from "../Backdrop";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import HeaderText from "../HeaderText/HeaderText";

export default function Header() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handler = () => {
      element.querySelector("path").classList.add("fill");
    };
    element.addEventListener("animationend", handler);
    return () => {
      element.removeEventListener("animationend", handler);
    };
  }, []);

  return (
    <Box
      position="relative"
      minH="lg"
      borderBottom="1px solid #ededed"
      overflow="hidden"
    >
      <Box
        position="relative"
        py={2}
        px={2}
        minH="2xl"
        display="flex"
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        borderBottom="1px solid #ededed"
      >
        <HeaderText />
        <Box height="100%" zIndex={0}>
          <Backdrop />
        </Box>
      </Box>
      <LanguageSelect />
    </Box>
  );
}

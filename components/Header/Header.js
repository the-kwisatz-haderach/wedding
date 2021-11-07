import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Heart from "../../images/other_heart_full.svg";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Backdrop } from "../Backdrop";
import { Button } from "@chakra-ui/button";
import swedishFlag from "../../images/sweden.png";
import croatianFlag from "../../images/croatia.png";

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
    <Box backgroundColor="white">
      <Box
        position="relative"
        py={10}
        minH="2xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Box
          w="100%"
          overflow="hidden"
          zIndex={1}
          display="flex"
          alignItems="center"
          flexDir={["column", "column", "row"]}
          justifyContent="center"
        >
          <Heading
            className="gradient-text"
            px={8}
            fontSize={["7xl", "8xl", "8xl", "9rem"]}
          >
            Dunja
          </Heading>
          <Box
            ref={ref}
            className="draw"
            w={["70px", "70px", "70px", "100px"]}
            maxW="500px"
          >
            <Heart width="100%" />
          </Box>
          <Heading
            className="gradient-text"
            px={8}
            fontSize={["7xl", "8xl", "8xl", "9rem"]}
          >
            Gustaf
          </Heading>
        </Box>
        <Flex mt={5} zIndex={1}>
          <Link replace href="/" locale="sv">
            <a
              style={{
                marginRight: "1rem",
                display: "flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              <Image
                src={swedishFlag}
                width={25}
                height={25}
                alt="Swedish flag"
              />
              <span style={{ marginLeft: 8 }}>Svenska</span>
            </a>
          </Link>
          <Link replace href="/" locale="hr">
            <a
              style={{
                marginLeft: "1rem",
                display: "flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              <Image
                src={croatianFlag}
                width={25}
                height={25}
                alt="Croatian flag"
              />
              <span style={{ marginLeft: 8 }}>Hrvatski</span>
            </a>
          </Link>
        </Flex>
        <Box height="100%" zIndex={0}>
          <Backdrop />
        </Box>
      </Box>
    </Box>
  );
}

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Heart from "../../images/other_heart_full.svg";
import flowersTop from "../../images/top.jpg";
import flowersBottom from "../../images/bottom.jpg";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Backdrop } from "../Backdrop";
import { Button } from "@chakra-ui/button";
import swedishFlag from "../../images/sweden.png";
import croatianFlag from "../../images/croatia.png";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const ref = useRef();
  const { locale } = useRouter();

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
    <Box backgroundColor="white" position="relative" minH="lg">
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
          p={3}
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            position="absolute"
            w="100%"
            h="auto"
            bottom={["90%", "90%", "50%"]}
            left={0}
          >
            <Image src={flowersTop} layout="responsive" />
          </Box>
          <Box
            position="absolute"
            w="100%"
            h="auto"
            top={["90%", "90%", "50%"]}
            left={0}
          >
            <Image src={flowersBottom} layout="responsive" />
          </Box>
          <Box
            p={[2, 4, 10]}
            zIndex={2}
            backgroundColor="white"
            display="flex"
            alignItems="center"
            position="relative"
            flexDir={["column", "column", "row"]}
          >
            <Heading
              className="gradient-text"
              px={8}
              fontSize={["7xl", "8xl", "8xl", "9rem"]}
            >
              Dunja
            </Heading>
            <Heading
              className="gradient-text"
              fontSize={["7xl", "8xl", "8xl", "9rem"]}
            >
              &
            </Heading>
            {/* <Box
              ref={ref}
              className="draw"
              w={["70px", "70px", "70px", "100px"]}
              maxW="500px"
            >
              <Heart width="100%" />
            </Box> */}
            <Heading
              className="gradient-text"
              px={8}
              fontSize={["7xl", "8xl", "8xl", "9rem"]}
            >
              Gustaf
            </Heading>
          </Box>
          <Box
            border="1px solid #cfa344"
            w="100%"
            h="100%"
            boxShadow="15px 35px 30px -25px #00000052"
            backgroundImage="linear-gradient(149deg, #e7ba58, #ffe8b4, #f1c461)"
            position="absolute"
            inset={0}
            zIndex={1}
          />
        </Box>
        {/* <Flex mt={5} zIndex={1}>
          <Link replace href="/" locale="sv">
            <a
              className={`lang-link${locale === "sv" ? " selected" : ""}`}
              style={{
                marginRight: "1rem",
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
              className={`lang-link${locale === "hr" ? " selected" : ""}`}
              style={{
                marginLeft: "1rem",
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
        </Flex> */}
        <Box height="100%" zIndex={0}>
          <Backdrop />
        </Box>
      </Box>
    </Box>
  );
}

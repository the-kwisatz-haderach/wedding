import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Heart from "../../images/other_heart_full.svg";
import flowersTop from "../../images/top.jpg";
import flowersBottom from "../../images/bottom.jpg";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
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
    <Box
      backgroundColor="white"
      position="relative"
      minH="lg"
      borderBottom="1px solid #ededed"
    >
      <Box
        position="relative"
        py={2}
        px={2}
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
            bottom={["92%", "71%", "60%"]}
            left={0}
          >
            <Image src={flowersTop} layout="responsive" />
          </Box>
          <Box
            position="absolute"
            w="100%"
            h="auto"
            top={["92%", "71%", "60%"]}
            left={0}
          >
            <Image src={flowersBottom} layout="responsive" />
          </Box>
          <Box
            zIndex={2}
            py={8}
            px={4}
            backgroundColor="white"
            display="flex"
            alignItems="center"
            position="relative"
            flexDir="column"
          >
            <Flex flexDir={["column", "row"]} alignItems="center">
              <Heading
                className="gradient-text"
                textAlign="center"
                position="relative"
                px={[2, 8]}
                fontSize={["5xl", "6xl", "8xl", "8rem"]}
              >
                Dunja
                <Box
                  ref={ref}
                  className="draw"
                  position="absolute"
                  transform="rotate(7deg)"
                  top={["14px", "17px", "24px", "34px"]}
                  right={["21px", "49px", "60px", "72px"]}
                  w={["12px", "14px", "21px", "26px"]}
                  backgroundColor="white"
                >
                  <Heart width="100%" />
                </Box>
              </Heading>
              <Heading
                lineHeight={1}
                className="gradient-text"
                textAlign="center"
                fontSize={["3xl", "5xl", "6xl", "6rem"]}
              >
                &
              </Heading>
              <Heading
                className="gradient-text"
                textAlign="center"
                px={[2, 8]}
                fontSize={["5xl", "6xl", "8xl", "8rem"]}
              >
                Gustaf
              </Heading>
            </Flex>
            <Flex
              mt={[4, 4, 0]}
              h={["30px", "50px"]}
              alignItems="center"
              fontSize={["sm", "lg", "xl"]}
            >
              <Text px={4}>Sat</Text>
              <Divider orientation="vertical" />
              <Text px={4}>9 July</Text>
              <Divider orientation="vertical" />
              <Text px={4}>2022</Text>
            </Flex>
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
        <Box height="100%" zIndex={0}>
          <Backdrop />
        </Box>
      </Box>
      <Flex py={4} zIndex={1} justifyContent="center">
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
      </Flex>
    </Box>
  );
}

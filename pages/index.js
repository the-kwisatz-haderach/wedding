import { useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/layout";
import Heart from "../images/other_heart_full.svg";
import Sections from "../components/Sections";
import { Backdrop } from "../components/Backdrop";
import { sections } from "../lib/sections";
import { Slide } from "@chakra-ui/transition";
import { useDisclosure } from "@chakra-ui/hooks";

export default function Home() {
  const ref = useRef();
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation("common");

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

  useEffect(() => {
    const timer = setTimeout(() => {
      onToggle();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dunja & Gustaf</title>
        <meta name="description" content="Our Wedding Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflowY="scroll" height="100vh" backgroundColor="gray.50">
        <Box
          backgroundImage="linear-gradient(170deg, #ff7070c7, #fc929285)"
          position="relative"
          py={10}
          minH="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Box
            w="100%"
            overflow="hidden"
            zIndex={10}
            display="flex"
            alignItems="center"
            flexDir={["column", "column", "row"]}
            justifyContent="center"
          >
            <Heading
              className="gradient-text slide-right"
              px={6}
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
              className="gradient-text slide-left"
              px={6}
              fontSize={["7xl", "8xl", "8xl", "9rem"]}
            >
              Gustaf
            </Heading>
          </Box>
          <Text
            backgroundImage="linear-gradient(139deg, #c1c1c1, white, #e3e3e3)"
            color="#8b8b8ba6"
            py={3}
            px={10}
            mt={4}
            borderRadius="70px"
            boxShadow="xl"
            fontSize={["sm", "xl", "xl", "3xl"]}
          >
            Official Wedding Site
          </Text>
          <Box height="100%">
            <Backdrop />
          </Box>
        </Box>
        <Sections sections={sections} />
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

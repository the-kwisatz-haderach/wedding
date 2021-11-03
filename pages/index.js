import { useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import TextBlock from "../components/TextBlock";
import Heart from "../images/other_heart_full.svg";
import Sections from "../components/Sections";
import { Backdrop } from "../components/Backdrop";
import { sections } from "../lib/sections";

export default function Home() {
  const ref = useRef();
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

  return (
    <>
      <Head>
        <title>Dunja & Gustaf</title>
        <meta name="description" content="Our Wedding Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflowY="scroll" height="100vh" backgroundColor="gray.50">
        <Box
          backgroundColor="white"
          position="relative"
          py={10}
          minH="2xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Box
            ref={ref}
            className="draw"
            position="absolute"
            top={0}
            left="25%"
          >
            <Box>
              <Heart width="100%" />
            </Box>
          </Box>
          <TextBlock title="Dunja & Gustaf" />
          <Box height="100%" hidden>
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

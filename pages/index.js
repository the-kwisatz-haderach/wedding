import { useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import { Box, Container } from "@chakra-ui/layout";
import MainLayout from "../components/MainLayout";
import SectionMenu from "../components/SectionMenu";
import TextBlock from "../components/TextBlock";
import rings from "../images/diamond_color.png";
import hero from "../images/hero.jpeg";
import "../images/heart.svg";

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 16 + "px";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "❤️️";
  return heart;
}

const Backdrop = () => {
  const ref = useRef(null);

  useEffect(() => {
    let interval;
    if (ref.current) {
      interval = setInterval(function () {
        const heart = createHeart();
        ref.current.appendChild(heart);
        setTimeout(() => {
          heart.remove();
        }, 3000);
      }, 500);
    }
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        height: "inherit",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box scrollBehavior="smooth" overflowY="scroll" height="100vh">
        <Box
          position="relative"
          height="50vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Image src={rings} width={50} height={50} alt="Rings" />
          <TextBlock
            title="Welcome to our big fat Croatian wedding"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quaerat?"
          />
          <Backdrop />
        </Box>
        <SectionMenu
          sections={[
            {
              id: "1",
              label: "Label 1",
            },
            {
              id: "2",
              label: "Label 2",
            },
            {
              id: "3",
              label: "Label 3",
            },
          ]}
        />
        <Container as="main" backgroundColor="white" zIndex={10}>
          <Box>
            <Box height={500} id="1">
              1
            </Box>
            <Box height={500} id="2">
              2
            </Box>
            <Box height={500} id="3">
              3
            </Box>
            <Box height={500} id="4">
              4
            </Box>
          </Box>
        </Container>
      </Box>
    </MainLayout>
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

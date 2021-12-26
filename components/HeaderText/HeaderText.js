import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Divider, Fade, ScaleFade } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import flowersTop from "../../images/top.jpg";
import flowersBottom from "../../images/bottom.jpg";
import useIntersectingElement from "../../hooks/useIntersectingElement";

// import Heart from "../../images/other_heart_full.svg";

export default function HeaderText() {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectingElement({
    removeOnIntersection: true,
  });

  // useEffect(() => {
  //   const element = ref.current;
  //   if (!element) return;
  //   const handler = () => {
  //     element.querySelector("path").classList.add("fill");
  //   };
  //   element.addEventListener("animationend", handler);
  //   return () => {
  //     element.removeEventListener("animationend", handler);
  //   };
  // }, []);

  return (
    <Box
      p={3}
      position="relative"
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      {/* <Box
        ref={ref}
        className="draw"
        w="300px"
        position="absolute"
        zIndex={1}
        top="0"
        right={-5}
      >
        <Heart width="100%" />
      </Box> */}
      <Fade
        in={isIntersecting}
        transition={{
          enter: { duration: 1 },
        }}
      >
        <Box
          position="absolute"
          w="100%"
          h="auto"
          bottom={["92%", "71%", "60%"]}
          left={0}
        >
          <Image src={flowersTop} layout="responsive" alt="flowers" />
        </Box>
      </Fade>
      <Fade
        in={isIntersecting}
        transition={{
          enter: { duration: 1 },
        }}
      >
        <Box
          position="absolute"
          w="100%"
          h="auto"
          top={["92%", "71%", "60%"]}
          left={0}
        >
          <Image src={flowersBottom} layout="responsive" alt="flowers" />
        </Box>
      </Fade>
      <Box
        border="1px solid #cfa344"
        zIndex={2}
        py={8}
        px={4}
        backgroundColor="white"
        display="flex"
        alignItems="center"
        position="relative"
        flexDir="column"
      >
        <ScaleFade
          in={isIntersecting}
          initialScale={0}
          delay={3}
          transition={{
            enter: {
              duration: 1,
            },
          }}
        >
          <Flex flexDir={["column", "row"]} alignItems="center">
            <Heading
              className="gradient-text"
              lineHeight={1}
              position="relative"
              px={[2, 8]}
              fontSize={["5xl", "6xl", "8xl", "8rem"]}
            >
              Dunja
            </Heading>
            <Heading
              lineHeight={1}
              className="gradient-text"
              fontSize={["3xl", "5xl", "6xl", "6rem"]}
              position="relative"
            >
              &
            </Heading>
            <Heading
              lineHeight={1}
              className="gradient-text"
              px={[2, 8]}
              fontSize={["5xl", "6xl", "8xl", "8rem"]}
            >
              Gustaf
            </Heading>
          </Flex>
        </ScaleFade>
        <Flex flexDir={["column", "row"]} mt={[3, 0]} alignItems="center">
          <Text
            fontSize={["sm", "sm", "lg", "xl"]}
            mr={[0, 0, 4]}
            mb={[3, 0]}
            style={{
              animationPlayState: isIntersecting ? "running" : "paused",
              transformOrigin: "right",
              animationDelay: "0.3s",
            }}
            className="drop-in"
          >
            {t("wereGettingMarried")}
          </Text>
          <Flex
            h={["30px", "50px"]}
            alignItems="center"
            letterSpacing="widest"
            textTransform="uppercase"
            fontSize={["sm", "sm", "lg", "xl"]}
          >
            <Box position="relative" px={[3, 5]}>
              <Text
                fontWeight="bold"
                style={{
                  animationPlayState: isIntersecting ? "running" : "paused",
                  transformOrigin: "right",
                  animationDelay: "1s",
                }}
                className="drop-in"
              >
                {t("saturday")}
              </Text>
            </Box>
            <Divider
              orientation="vertical"
              borderWidth={2}
              style={{
                animationPlayState: isIntersecting ? "running" : "paused",
                transformOrigin: "right",
                animationDelay: "1.3s",
              }}
              className="drop-in"
            />
            <Box position="relative" px={[3, 5]}>
              <Text
                fontWeight="bold"
                style={{
                  animationPlayState: isIntersecting ? "running" : "paused",
                  transformOrigin: "center",
                  animationDelay: "1.5s",
                }}
                className="drop-in"
              >
                9 {t("july")}
              </Text>
            </Box>
            <Divider
              borderWidth={2}
              orientation="vertical"
              style={{
                animationPlayState: isIntersecting ? "running" : "paused",
                transformOrigin: "right",
                animationDelay: "1.7s",
              }}
              className="drop-in"
            />
            <Box position="relative" px={[3, 5]}>
              <Text
                fontWeight="bold"
                style={{
                  animationPlayState: isIntersecting ? "running" : "paused",
                  transformOrigin: "left",
                  animationDelay: "2s",
                }}
                className="drop-in"
              >
                2022
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box className="gold-border" />
    </Box>
  );
}

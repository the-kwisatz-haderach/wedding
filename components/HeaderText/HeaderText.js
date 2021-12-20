import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import flowersTop from "../../images/top.jpg";
import flowersBottom from "../../images/bottom.jpg";
// import Heart from "../../images/other_heart_full.svg";

export default function HeaderText() {
  const { t } = useTranslation();
  // const ref = useRef();

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
    <Box p={3} position="relative" justifyContent="center" alignItems="center">
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
      <Box
        position="absolute"
        w="100%"
        h="auto"
        bottom={["92%", "71%", "60%"]}
        left={0}
      >
        <Image src={flowersTop} layout="responsive" alt="flowers" />
      </Box>
      <Box
        position="absolute"
        w="100%"
        h="auto"
        top={["92%", "71%", "60%"]}
        left={0}
      >
        <Image src={flowersBottom} layout="responsive" alt="flowers" />
      </Box>
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
        <Flex
          flexDir={["column", "row"]}
          alignItems="center"
          className="move-up"
        >
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
        <Flex flexDir={["column", "row"]} mt={[3, 0]} alignItems="center">
          <Text
            fontSize={["sm", "sm", "lg", "xl"]}
            mr={[0, 0, 4]}
            mb={[3, 0]}
            style={{
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
              style={{
                transformOrigin: "right",
                animationDelay: "1.3s",
              }}
              className="drop-in"
            />
            <Box position="relative" px={[3, 5]}>
              <Text
                fontWeight="bold"
                style={{
                  transformOrigin: "center",
                  animationDelay: "1.5s",
                }}
                className="drop-in"
              >
                9 {t("july")}
              </Text>
            </Box>
            <Divider
              orientation="vertical"
              style={{
                transformOrigin: "right",
                animationDelay: "1.7s",
              }}
              className="drop-in"
            />
            <Box position="relative" px={[3, 5]}>
              <Text
                fontWeight="bold"
                style={{
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

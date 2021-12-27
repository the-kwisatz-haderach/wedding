import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import swedishFlag from "../../images/sweden.png";
import croatianFlag from "../../images/croatia.png";
import useIntersectingElement from "../../hooks/useIntersectingElement";
import { phrases } from "./phraseList";
import { useTranslation } from "next-i18next";

export default function Phrases() {
  const { t } = useTranslation("common");
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isIntersecting] = useIntersectingElement({
    removeOnIntersection: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (ref.current && isIntersecting) {
      ref.current.children[0].style.transform = "translateX(0vw)";
    }
  }, [ref, isIntersecting]);

  const clickExpand = () => {
    setIsExpanded((curr) => !curr);
    if (isExpanded) {
      ref.current.scrollIntoView(true);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.getElementById("phrase-list").style.height = "100%";
    } else {
      document.getElementById("phrase-list").style.height = "270px";
    }
  }, [isExpanded]);

  return (
    <Box ref={ref}>
      <Box
        transform="translateX(-100vw)"
        transition="transform 0.8s ease-in-out"
        backgroundColor="white"
        borderRadius={20}
        boxShadow="5px 20px 40px -15px #00000026"
        pt={2}
        pb={4}
      >
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          px={[4, 10]}
          py={6}
        >
          <Flex alignItems="center">
            <Image
              src={swedishFlag}
              width={30}
              height={30}
              alt="Swedish flag"
            />
            <Text ml={3} fontWeight="bold">
              Svenska
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Text mr={3} fontWeight="bold">
              Hrvatski
            </Text>
            <Image
              src={croatianFlag}
              width={30}
              height={30}
              alt="Croatian flag"
            />
          </Flex>
        </Flex>
        <Flex id="phrase-list" flexDir="column" overflowY="hidden">
          {phrases.map((phrase) => (
            <React.Fragment key={phrase.phrase}>
              <Divider />
              <Flex
                px={[4, 10]}
                py={5}
                key={phrase.phrase}
                flexWrap="wrap"
                justifyContent="space-between"
                sx={{
                  "& > *::first-letter": {
                    textTransform: "uppercase",
                  },
                }}
              >
                <Text>{phrase.phrase}</Text>
                <Text>{phrase.translation}</Text>
              </Flex>
            </React.Fragment>
          ))}
        </Flex>
        <Flex justifyContent="center" mt={2}>
          <Button onClick={clickExpand} variant="solid" colorScheme="teal">
            {isExpanded ? t("showLess") : t("showAll")}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

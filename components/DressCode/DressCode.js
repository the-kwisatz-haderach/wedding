import React, { useEffect } from "react";
import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import dressCodeMan from "../../images/wedding-suit.png";
import dressCodeWoman from "../../images/wedding-dress.png";
import useIntersectingElement from "../../hooks/useIntersectingElement";

export default function DressCode() {
  const [ref, isIntersecting] = useIntersectingElement({
    removeOnIntersection: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (ref.current && isIntersecting) {
      ref.current.children[0].style.transform = "translateX(0vw)";
    }
  }, [ref, isIntersecting]);

  return (
    <Box ref={ref}>
      <Box
        borderStyle="solid"
        borderWidth={1}
        borderColor="gray.100"
        transform="translateX(-100vw)"
        transition="transform 0.8s ease-in-out"
        backgroundColor="white"
        borderRadius={20}
        boxShadow="5px 20px 40px -15px #00000026"
        pt={2}
        pb={4}
      >
        <Flex height={200} p={4} justifyContent="center" alignItems="center">
          <Center flex={1} height="100%">
            <Text mb={2} textAlign="center">
              Proident magna eu adipisicing mollit pariatur qui laborum.
            </Text>
          </Center>
          <Flex
            alignItems="center"
            flexDir="column"
            justifyContent="center"
            height="100%"
          >
            <Center height="100%">
              <Divider orientation="vertical" />
            </Center>
          </Flex>
          <Center flex={1} height="100%" justifyContent="space-evenly">
            <Flex flexDir="column" alignItems="center">
              <Text mb={2} fontWeight="bold" fontSize="xs">
                Honom
              </Text>
              <Image
                src={dressCodeMan}
                alt="Dress code"
                width={80}
                height={80}
              />
              <Text mt={4} fontSize="lg">
                Kavaj
              </Text>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Text mb={2} fontWeight="bold" fontSize="xs">
                Henne
              </Text>
              <Image
                src={dressCodeWoman}
                alt="Dress code"
                width={80}
                height={80}
              />
              <Text mt={4} fontSize="lg">
                Kavaj
              </Text>
            </Flex>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}

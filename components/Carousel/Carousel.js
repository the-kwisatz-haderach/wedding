import React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { ScaleFade, IconButton } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Carousel({ items = [], activeIndex, onNext }) {
  return (
    <Flex width="100%" alignItems="center">
      <Flex flex={1}>
        <Flex flexWrap="nowrap" flex={1} position="relative" height={200}>
          {items.map(({ title, description, image }, index) => (
            <ScaleFade
              key={index}
              initialScale={0}
              unmountOnExit
              transition={{
                enter: {
                  duration: 0.6,
                },
                exit: {
                  duration: 0.2,
                },
              }}
              in={index === activeIndex}
              style={{
                zIndex: 10,
                position: "absolute",
                inset: 0,
                flexShrink: 0,
                width: "100%",
              }}
            >
              <Flex position="relative" flexDir={["column", "column", "row"]}>
                <Box
                  borderRadius={10}
                  width="100%"
                  boxShadow="0px 12px 30px -5px rgba(0,0,0,0.7)"
                  position="relative"
                >
                  <Image src={image} alt="title" layout="fill" />
                </Box>
                <Box ml={16} mt={4}>
                  <Flex alignItems="center">
                    <Heading style={{ marginBottom: 8 }}>{title}</Heading>
                  </Flex>
                  <Box>
                    <Text>{description}</Text>
                  </Box>
                </Box>
              </Flex>
            </ScaleFade>
          ))}
        </Flex>
      </Flex>
      <IconButton
        ml={8}
        colorScheme="red"
        onClick={onNext}
        icon={<ArrowRightIcon />}
      />
    </Flex>
  );
}

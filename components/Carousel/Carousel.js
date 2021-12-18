import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function Carousel({ items = [], activeIndex, onNext }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.children[activeIndex].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <Box display="flex" flexDir="column">
      <Flex
        ref={ref}
        flexWrap="nowrap"
        width="100%"
        position="relative"
        pointerEvents="none"
        overflowX="scroll"
        className="hide-scrollbar"
        style={{
          scrollbarWidth: 0,
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map(({ title, description, image }, index) => (
          <Flex
            key={index}
            flexShrink={0}
            mx={10}
            position="relative"
            width="100%"
            alignItems="center"
            flexDir={["column", "column", "row"]}
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <Box borderRadius={10} position="relative" width="100%">
              <Image src={image} alt="title" layout="responsive" />
            </Box>
            <Box ml={[undefined, undefined, 10]} mt={[5, 5, 0]}>
              <Flex alignItems="center">
                <Heading style={{ marginBottom: 8 }}>{title}</Heading>
              </Flex>
              <Box>
                <Text>{description}</Text>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex mb={8} width="100%" justifyContent="space-between">
        <Button
          as="a"
          colorScheme="teal"
          href={items[activeIndex].link}
          target="_blank"
        >
          Google Maps <ExternalLinkIcon ml={2} />
        </Button>
        <Button colorScheme="red" onClick={onNext}>
          Next <ArrowRightIcon ml={2} fontSize="xs" />
        </Button>
      </Flex>
    </Box>
  );
}

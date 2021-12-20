import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";

export default function Carousel({
  items = [],
  activeIndex,
  onNext,
  onPrevious,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.children[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
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
        {items.map(({ title, description, image, link }, index) => (
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
              <Box mt={6}>
                <Link isExternal color="teal" href={link} pointerEvents="all">
                  Show on Google Maps{" "}
                  <ExternalLinkIcon fontSize="lg" mb={1} ml={1} />
                </Link>
              </Box>
            </Box>
          </Flex>
        ))}
      </Flex>
      <Flex my={8} width="100%" justifyContent="space-between">
        <Button colorScheme="teal" onClick={onPrevious}>
          <ArrowLeftIcon mr={2} fontSize="xs" /> Previous
        </Button>
        <Button colorScheme="teal" onClick={onNext}>
          Next <ArrowRightIcon ml={2} fontSize="xs" />
        </Button>
      </Flex>
    </Box>
  );
}

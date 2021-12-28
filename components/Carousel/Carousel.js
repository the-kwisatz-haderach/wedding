import React, { useCallback, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function Carousel({ items = [], activeIndex, onChangeIndex }) {
  const ref = useRef(null);
  const renders = useRef(0);
  const goToNext = () => {
    const newIndex = (activeIndex + 1) % items.length;
    onChangeIndex(newIndex);
  };
  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    onChangeIndex(newIndex);
  };

  useEffect(() => {
    if (renders.current > 0) {
      ref.current.children[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    renders.current += 1;
  }, [activeIndex, ref]);

  const onScroll = useCallback(
    debounce(
      (e) => {
        onChangeIndex(
          Math.max(
            Array.from(e.target.children).findIndex(
              (child) => e.target.scrollLeft <= child.offsetLeft
            ),
            0
          )
        );
      },
      200,
      {
        trailing: true,
        leading: true,
      }
    ),
    [onChangeIndex]
  );

  return (
    <Box display="flex" flexDir="column" mb={4}>
      <Flex
        my={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button colorScheme="teal" onClick={goToPrevious}>
          <ArrowLeftIcon fontSize="xs" />
        </Button>
        <Text fontWeight="bold" fontSize="xl">
          {items[activeIndex].title}
        </Text>
        <Button colorScheme="teal" onClick={goToNext}>
          <ArrowRightIcon fontSize="xs" />
        </Button>
      </Flex>
      <Flex
        ref={ref}
        onScroll={onScroll}
        flexWrap="nowrap"
        width="100%"
        position="relative"
        overflowX="scroll"
        className="hide-scrollbar"
        style={{
          scrollbarWidth: 0,
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map(({ description, image }, index) => (
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
            <Box
              borderRadius={10}
              position="relative"
              width={["100%", "100%", "50%"]}
              mb={[5, 5, 0]}
            >
              <Image src={image} alt="title" layout="responsive" />
            </Box>
            <Box ml={[undefined, undefined, 10]} mb={[3, 3, 0]}>
              <Text>{description}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

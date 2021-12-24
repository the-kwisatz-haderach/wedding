import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ExternalLink from "../../ExternalLink/ExternalLink";
import useIntersectingElement from "../../../hooks/useIntersectingElement";

export function Edge({ children = "", isLast = false, color = "" }) {
  return (
    <Box
      hidden={!children}
      flexShrink={0}
      display="flex"
      width="fit-content"
      height="100%"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontWeight="bold"
      fontSize="3rem"
      borderTopWidth={isLast ? 4 : 0}
      borderBottomWidth={!isLast ? 4 : 0}
      borderStyle="solid"
      borderColor={color}
    >
      {children}
    </Box>
  );
}

export function Regular({
  title = "",
  symbol = "",
  description = "",
  time = "",
  link = "",
  linkLabel = "",
}) {
  const [ref, isIntersecting] = useIntersectingElement({
    removeOnIntersection: true,
  });
  return (
    <Box ref={ref}>
      <Box
        style={{
          transform: `translateX(${isIntersecting ? 0 : -100}vw)`,
        }}
        transition="transform 0.8s ease-in-out"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            flexShrink={0}
            display="flex"
            height="100%"
            p={5}
            justifyContent="center"
            alignItems="center"
            color="white"
            fontWeight="bold"
            backgroundColor="red.100"
            borderRadius="30px"
            boxShadow="lg"
            position="relative"
            top={7}
          >
            {time}
          </Box>
        </Box>
        <Box
          p={[8, 8, 10]}
          borderRadius={20}
          boxShadow="5px 20px 40px -15px #00000026"
          backgroundColor="white"
          borderWidth={2}
          borderStyle="solid"
          borderColor="gray.100"
        >
          <Flex mb={3} alignItems="flex-end" flexWrap="wrap" height="100%">
            <Box
              as="span"
              width="50px"
              height="50px"
              fontSize="3rem"
              mb={3}
              mr={4}
            >
              {symbol}
            </Box>
            <Heading lineHeight="1">{title}</Heading>
          </Flex>
          <Text mb={3}>{description}</Text>
          {link && linkLabel && (
            <Box textAlign="right">
              <ExternalLink href={link}>{linkLabel}</ExternalLink>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

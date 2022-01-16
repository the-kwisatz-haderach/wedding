import React, { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
        <Flex h="100px" justifyContent="center" alignItems="center">
          <Text fontSize="lg">Coming soon...</Text>
        </Flex>
      </Box>
    </Box>
  );
}

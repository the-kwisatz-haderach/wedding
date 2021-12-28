import { useEffect, memo } from "react";
import Image from "next/image";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import ExternalLink from "../ExternalLink/ExternalLink";
import useIntersectingElement from "../../hooks/useIntersectingElement";

export const Item = memo(
  ({
    isEven = false,
    imageSrc = "",
    imageAlt = "",
    title = "",
    description = "",
    link = "",
    linkLabel = "",
  }) => {
    const [ref, isIntersecting] = useIntersectingElement({
      removeOnIntersection: true,
      rootMargin: "200px",
    });

    useEffect(() => {
      if (ref.current && isIntersecting) {
        ref.current.children[0].style.transform = "translateX(0vw)";
      }
    }, [ref, isIntersecting]);

    return (
      <Box ref={ref}>
        <Stack
          transform={`translateX(${isEven ? -100 : 100}vw)`}
          transition="transform 0.8s ease-in-out"
          alignItems="center"
          spacing={[2, 2, 10]}
          direction={
            isEven
              ? ["column", "column", "row-reverse"]
              : ["column", "column", "row"]
          }
        >
          {imageSrc && (
            <Box
              height="100%"
              width="100%"
              flex={1}
              mb={[2, 2, 0]}
              position="relative"
              borderRadius={5}
              overflow="hidden"
              boxShadow="0px 20px 30px -20px black"
            >
              <Image src={imageSrc} alt={imageAlt} layout="responsive" />
            </Box>
          )}
          <Box py={2} flex={2} width="100%">
            <Heading>{title}</Heading>
            <Text my={3}>{description}</Text>
            {link && (
              <Box textAlign={["right", "right", "left"]} width="100%">
                <ExternalLink href={link}>{linkLabel}</ExternalLink>
              </Box>
            )}
          </Box>
        </Stack>
      </Box>
    );
  }
);

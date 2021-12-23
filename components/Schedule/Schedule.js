import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

/*
title
time
description
*/

export default function Schedule({ items = [] }) {
  return (
    <Box
      backgroundColor={["transparent", "transparent", "white"]}
      boxShadow={["none", "none", "5px 20px 40px -15px #00000026"]}
      borderRadius={20}
      pl={0}
      pr={[0, 0, 12]}
    >
      <Box
        py={20}
        maxWidth="800px"
        margin="auto"
        display="flex"
        flexDir="column"
        sx={{
          "& > *:not(:last-child)": {
            marginBottom: 16,
          },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            position="relative"
            sx={{
              "&:not(:last-child)::before": {
                content: '""',
                position: "absolute",
                top: "50px",
                left: "40px",
                width: "2px",
                backgroundColor: "rgba(0,0,0,0.1)",
                height: "120%",
              },
            }}
          >
            <Box
              ml={4}
              mr={10}
              flexShrink={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              fontWeight="bold"
              w={50}
              h={50}
              backgroundColor="red.400"
              borderRadius="50%"
              boxShadow="lg"
            >
              {index + 1}
            </Box>
            <Box>
              <Heading>
                <span
                  style={{
                    marginRight: 5,
                  }}
                >
                  {item.symbol}
                </span>{" "}
                {item.title}
              </Heading>
              <Text my={2} color="gray.500">
                <TimeIcon position="relative" bottom="2px" mr="2px" />{" "}
                {item.time}
              </Text>
              <Text>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

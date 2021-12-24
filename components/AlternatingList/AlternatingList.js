import React from "react";
import { Divider, VStack } from "@chakra-ui/react";
import { Item } from "./Item";

export default function AlternatingList({
  items = [
    {
      title: "",
      description: "",
      imageSrc: "",
      imageAlt: "",
      link: "",
      linkLabel: "",
    },
  ],
}) {
  return (
    <VStack align="stretch" spacing={10} divider={<Divider />}>
      {items.map((item, index) => (
        <Item {...item} key={index} isEven={index % 2 === 0} />
      ))}
    </VStack>
  );
}

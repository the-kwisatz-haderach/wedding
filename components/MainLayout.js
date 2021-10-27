import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box position="fixed" right={8} bottom={4} zIndex={1000}>
        <Button colorScheme="red" onClick={() => setIsOpen((curr) => !curr)}>
          Pages
        </Button>
      </Box>
      <Drawer placement="left" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Pages</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {children}
    </>
  );
}

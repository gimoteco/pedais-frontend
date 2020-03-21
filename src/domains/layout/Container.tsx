import React from "react";
import { Box, Flex } from "rebass";

export const Container = ({ children }) => (
  <Flex flexDirection="column" minHeight={"100%"} bg="white">
    {children}
  </Flex>
);

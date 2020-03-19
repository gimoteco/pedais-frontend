import React from "react";
import { Box, Flex } from "rebass";

export const Container = ({ children }) => (
  <Flex flexDirection="column" height={"100%"} bg="white">
    {children}
  </Flex>
);

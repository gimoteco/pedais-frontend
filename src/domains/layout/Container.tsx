import React from "react";
import { Box } from "rebass";

export const Container = ({ children }) => (
  <Box height={"100%"} width={1} bg="white">
    {children}
  </Box>
);

import React from "react";
import { Box } from "rebass";

export const ContentContainer = ({ children, noPadding }) => (
  <Box flex={1} padding={noPadding ? 0 : 2}>
    {children}
  </Box>
);

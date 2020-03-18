import React from "react";
import { Box } from "rebass";

export const ContentContainer = ({ children, noPadding }) => (
  <Box padding={noPadding ? 0 : 2}>{children}</Box>
);

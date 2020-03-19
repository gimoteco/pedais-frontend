import React from "react";
import { Flex } from "rebass";
import { Image as ImageIcon } from "react-feather";

const IMAGE_HEIGHT = 300;

export const ImagePlaceholder = ({ sx }) => (
  <Flex
    bg="gray"
    height={IMAGE_HEIGHT}
    alignItems="center"
    justifyContent="center"
    color="white"
    sx={sx}
  >
    <ImageIcon size={80} />
  </Flex>
);

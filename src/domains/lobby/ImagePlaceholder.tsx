import React from "react";
import { Flex } from "rebass";
import { Image as ImageIcon } from "react-feather";

export const IMAGE_HEIGHT = 300;

export const ImagePlaceholder = ({
  sx = {},
  onClick = undefined,
  ...otherProps
}) => (
  <Flex
    bg="gray"
    onClick={onClick}
    height={IMAGE_HEIGHT}
    alignItems="center"
    justifyContent="center"
    color="white"
    {...otherProps}
    sx={sx}
  >
    <ImageIcon size={80} />
  </Flex>
);

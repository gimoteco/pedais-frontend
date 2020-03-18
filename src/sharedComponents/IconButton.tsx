import React from "react";
import { Button, Flex } from "rebass";

export function IconButton({ Icon, children, ...props }) {
  return (
    <Button
      width={1}
      fontWeight={"bold"}
      padding={3}
      bg="secondary"
      color="white"
      fontSize={3}
      {...props}
      sx={{
        svg: {
          marginRight: 2
        },
        textTransform: "uppercase",
        fontFamily: "body",
        "&:not(:last-child)": {
          marginBottom: 2
        }
      }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Icon /> {children}
      </Flex>
    </Button>
  );
}

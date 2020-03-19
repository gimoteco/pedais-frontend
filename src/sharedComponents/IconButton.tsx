import React from "react";
import { Button, Flex } from "rebass";

export function IconButton({ Icon, children, ...props }) {
  return (
    <Button variant="secondary" {...props}>
      <Flex justifyContent="center" alignItems="center">
        <Icon /> {children}
      </Flex>
    </Button>
  );
}

import React from "react";
import { Button, Flex } from "rebass";
import { RotatingLoadingIndicator } from "../domains/layout/RotatingLoadingIndicator";

export function IconButton({ Icon, loading = false, children, ...props }) {
  return (
    <Button variant="secondary" {...props}>
      <Flex justifyContent="center" alignItems="center">
        {loading ? <RotatingLoadingIndicator width={24} /> : <><Icon /> {children}</>}
      </Flex>
    </Button>
  );
}

import React from "react";
import { Label } from "@rebass/forms";
import { Flex, Text } from "rebass";

export function Field({
  name,
  input,
  unit = "",
  variant = undefined
}: {
  name: string;
  input: JSX.Element;
  unit?: string;
  variant?: string;
}) {
  return (
    <>
      <Label mb={2} {...(variant ? { variant: `label.${variant}` } : {})}>
        {name}
      </Label>
      <Flex alignItems="center">
        {React.cloneElement(
          input,
          variant ? { variant: `input.${variant}` } : {}
        )}

        {unit && (
          <Text
            ml={1}
            tx="forms"
            variant={variant ? `unit.${variant}` : "unit"}
          >
            {unit}
          </Text>
        )}
      </Flex>
    </>
  );
}

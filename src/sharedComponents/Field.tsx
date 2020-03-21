import React from "react";
import slugify from "slugify";
import { Label } from "@rebass/forms";
import { Flex, Text } from "rebass";
import { Field as FinalFormField } from "react-final-form";

interface FieldProps {
  name: string;
  label: string;
  input: JSX.Element;
  unit?: string;
  variant?: string;
}

function Unit({ unit, variant }) {
  if (!unit) return null;
  return (
    <Text ml={1} tx="forms" variant={variant ? `unit.${variant}` : "unit"}>
      {unit}
    </Text>
  );
}

function getInputPropsByFieldType(input, { value, ...inputProps }) {
  return {
    ...inputProps,
    value: input.props.type === "file" ? undefined : value,
    onChange:
      input.props.type === "file"
        ? e => inputProps.onChange(e.target.files)
        : inputProps.onChange
  };
}

export function Field({
  name,
  label,
  input,
  unit = "",
  variant = undefined
}: FieldProps) {
  const nameSlug = slugify(name, { lower: true });
  return (
    <FinalFormField name={nameSlug}>
      {({ input: inputProps }) => {
        const adjustedInputProps = getInputPropsByFieldType(input, inputProps);
        return (
          <>
            <Label
              htmlFor={nameSlug}
              mb={2}
              {...(variant ? { variant: `label.${variant}` } : {})}
            >
              {label}
            </Label>
            <Flex alignItems="center">
              {React.cloneElement(
                input,
                variant
                  ? { ...adjustedInputProps, variant: `input.${variant}` }
                  : { ...adjustedInputProps }
              )}
              <Unit unit={unit} variant={variant} />
            </Flex>
          </>
        );
      }}
    </FinalFormField>
  );
}

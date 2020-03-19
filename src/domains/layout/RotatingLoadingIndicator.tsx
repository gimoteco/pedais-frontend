import React from "react";
import { Image } from "rebass";
import pedivela from "./pedivela.svg";
import { keyframes } from "@emotion/core";

const Rotate = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;
export function RotatingLoadingIndicator() {
  return (
    <Image
      sx={{
        animation: `${Rotate} 1s linear infinite`
      }}
      width={100}
      src={pedivela}
    />
  );
}

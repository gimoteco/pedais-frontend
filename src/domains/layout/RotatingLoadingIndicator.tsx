import React from "react"
import { Box } from "rebass"
import { ReactComponent as Pedivela } from "./pedivela.svg"
import { keyframes } from "@emotion/core"

const Rotate = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`
export function RotatingLoadingIndicator({ width = 100, color = "white" }) {
    return (
        <Box
            sx={{
                svg: {
                    animation: `${Rotate} 1s linear infinite`,
                    "path": {
                        fill: color
                    }
                }
            }}
        ><Pedivela width={width} height={width} /></Box>
    )
}

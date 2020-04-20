import React from "react"
import { Box } from "rebass"
import grungeTexture from "./grunge.png"

export const Stamp = ({ children, sx }) => {
    return <Box as="span" sx={{
        transform: "rotate(12deg)",
        color: "primary",
        fontSize: "3rem",
        fontWeight: 700,
        borderWidth: "0.25rem",
        borderStyle: "solid",
        borderColor: "primary",
        display: "inline-block",
        padding: "0.25rem 1rem",
        textTransform: "uppercase",
        borderRadius: "1rem",
        fontFamily: "Courier",
        "maskImage": `url('${grungeTexture}')`,
        "maskSize": "944px 604px",
        "mixBlendMode": "normal",
        ...sx
    }}>
        {children}
    </Box>
}

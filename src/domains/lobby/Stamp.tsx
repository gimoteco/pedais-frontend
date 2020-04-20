import React from "react"
import { Box } from "rebass"

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
        "-webkit-mask-image": "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png')",
        "-webkit-mask-size": "944px 604px",
        "mix-blend-mode": "normal",
        ...sx
    }}>
        {children}
    </Box>
}

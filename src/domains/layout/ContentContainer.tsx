import React from "react"
import { Box } from "rebass"

export const ContentContainer = ({ children, noPadding }) => (
    <Box flex={1} width={[1, 0.5]} margin={"0 auto"} padding={noPadding ? 0 : 2}>
        {children}
    </Box>
)

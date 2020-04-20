import React from "react";
import { Box, Text } from "rebass";

export function Section({ title, children, showIf = true }) {
    if (!showIf)
        return null;
    return (<Box mb={3} sx={{
        textTransform: "uppercase",
        fontFamily: "body"
    }}>
        <Text fontFamily="body" fontSize={3} fontWeight="bold" mb={2} sx={{
            textTransform: "uppercase"
        }}>
            {title}
        </Text>

        {children}
    </Box>);
}

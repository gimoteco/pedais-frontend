import React from "react";
import { User } from "react-feather";
import { Box } from "rebass";
export function AvatarPlaceholder({ sx, ...otherProps }) {
    return (<Box display="inline-flex" width={40} height={40} color="white" bg="gray" sx={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
        ...sx,

    }} {...otherProps}>
        <User size={25} />
    </Box>);
}

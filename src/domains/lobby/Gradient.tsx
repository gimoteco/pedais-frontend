import React from "react"
import { Flex } from "rebass"
import { useTheme } from "emotion-theming"
import { rgba } from "../../utils/color"

export const Gradient = ({ children, ...props }) => {
    const theme: any = useTheme()
    return (
        <Flex
            justifyContent={"space-between"}
            bg={rgba(theme.colors.black, 0.4)}
            {...props}
        >
            {children}
        </Flex>
    )
}

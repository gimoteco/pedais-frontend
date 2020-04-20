import React from "react"
import { Text, Flex } from "rebass"

export function IconnedInformation({ info, Icon, tip }) {
    return (
        <Flex
            color="white"
            alignItems="center"
            sx={{
                "&:not(:last-child)": {
                    mr: 3
                }
            }}
        >
            <Icon alt={tip} size={24} />
            <Text variant="value" ml={1}>
                {info}
            </Text>
        </Flex>
    )
}

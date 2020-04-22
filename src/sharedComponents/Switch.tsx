import { Label, Switch as SwitchRebass } from "@rebass/forms"
import React from "react"
import { Flex, Text } from "rebass"

export function Switch({ label, checked, onChange }) {
    return <Label width={"auto"}>
        <Flex alignItems="center">
            <SwitchRebass sx={{
                transform: "scale(0.8)",
            }} checked={checked} onClick={() => onChange(!checked)} />
            <Text as="span" ml={2}>{label}</Text>
        </Flex>
    </Label>
}
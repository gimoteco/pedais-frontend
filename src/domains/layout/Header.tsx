import React from "react"
import { Flex } from "rebass"
import Menu from "./Menu"

export function Header() {
    return (
        <Flex justifyContent="center" bg="primary" p={2}>
            <Menu />
        </Flex>
    )
}
import React from "react"
import { Flex } from "rebass"
import { Logo } from "./Logo"
import Menu from "./Menu"

export function Header() {
    return (
        <Flex justifyContent="center" bg="primary">
            <Flex
                color={"white"}
                padding={2}
                flexWrap="wrap"
                width={[1, 0.5]}
                justifyContent={["center", "space-between"]}
                alignItems="center"
            >
                <Logo width="180px" />

                <Menu />
            </Flex>
        </Flex>
    )
}
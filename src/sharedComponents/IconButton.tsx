import React from "react"
import { Button, Flex } from "rebass"
import { RotatingLoadingIndicator } from "../domains/layout/RotatingLoadingIndicator"

export function IconButton({ Icon = undefined, loading = false, children, ...props }: any) {
    return (
        <Button variant="secondary" {...props}>
            <Flex justifyContent="center" alignItems="center">
                {loading ? <RotatingLoadingIndicator width={24} /> : <>{Icon && <Icon />} {children}</>}
            </Flex>
        </Button>
    )
}

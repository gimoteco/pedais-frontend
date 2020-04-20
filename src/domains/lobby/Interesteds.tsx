import React from "react"
import { Flex } from "rebass"
import { Avatar } from "../../sharedComponents/Avatar"

export function Interesteds({ interesteds }) {
    return (
        <Flex flexWrap="wrap">
            {interesteds.map(user => (
                <Avatar key={user.id} user={user} sx={{
                    "&:not(:last-child)": {
                        mr: 1,
                        mb: 1
                    }
                }} />
            ))}
        </Flex>
    )
}

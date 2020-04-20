import React from "react"
import { ImageWithPlaceholder } from "../domains/lobby/ImageWithPlaceholder"
import { AVATAR_SIZE } from "../screens/Lobby"
import { AvatarPlaceholder } from "./AvatarPlaceholder"

export function Avatar({ user, size = undefined, sx }: any) {
    return (
        <ImageWithPlaceholder
            url={user.avatarUrl}
            sx={
                {
                    borderRadius: 99,
                    ...sx
                }
            }
            width={size ?? AVATAR_SIZE}
            height={size ?? AVATAR_SIZE}
            Placeholder={AvatarPlaceholder}
            alt={user.email}
            title={user.email}
            notLoadingDisplay="inline-block" />
    )
}

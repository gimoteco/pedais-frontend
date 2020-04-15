import React from "react";
import { ImageWithPlaceholder } from "../domains/lobby/ImageWithPlaceholder";
import { AVATAR_SIZE } from "../screens/Lobby";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
export function Avatar({ user }) {
    return (
        <ImageWithPlaceholder url={user.avatarUrl} sx={{
            borderRadius: 99,
            "&:not(:last-child)": {
                mr: 1,
                mb: 1
            }
        }}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            Placeholder={AvatarPlaceholder}
            alt={user.email}
            title={user.email}
            notLoadingDisplay="inline-block" />);
}

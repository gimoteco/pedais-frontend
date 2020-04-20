import React from "react"
import { ArrowUpRight, Map, Users } from "react-feather"
import { Box, Flex, Heading, Text } from "rebass"
import { formatDateTime, isPast } from "../../utils/date"
import { Gradient } from "./Gradient"
import { IconnedInformation } from "./IconnedInformation"
import { ImageWithPlaceholder } from "./ImageWithPlaceholder"
import { Stamp } from "./Stamp"

export function LobbyInformation({ lobby }) {
    const lobbyIsPast = isPast(new Date(lobby.date))

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            sx={{
                position: "relative",
            }}
        >
            <ImageWithPlaceholder isPast={lobbyIsPast} width={1} height={300} url={lobby.coverImageUrl} />

            {lobbyIsPast && <Stamp sx={{
                position: "absolute"
            }}>Já foi</Stamp>}

            <Gradient
                width={1}
                padding={2}
                sx={{
                    position: "absolute",
                    bottom: 0
                }}
            >
                <Flex flexDirection="column" fontSize={2}>
                    <Flex justifyContent="flex-start" mb={1}>
                        <IconnedInformation
                            tip="participantes"
                            info={lobby.interested.length}
                            Icon={Users}
                        />
                        <IconnedInformation
                            tip="distância"
                            info={`${lobby.distance} km`}
                            Icon={Map}
                        />
                        <IconnedInformation
                            tip="altimetria"
                            info={`${lobby.elevationGain} m`}
                            Icon={ArrowUpRight}
                        />
                    </Flex>
                    <Heading
                        color={"white"}
                        sx={{
                            textTransform: "uppercase"
                        }}
                    >
                        {lobby.name}
                    </Heading>

                    <Text fontWeight="bold" fontFamily="body" color={"white"}>
                        {formatDateTime(new Date(lobby.date))}
                    </Text>

                    {lobby.group !== null && (
                        <Text fontFamily={"body"} color={"white"}>
                            {lobby.group.name}
                        </Text>
                    )}
                </Flex>
            </Gradient>
        </Flex>
    )
}

export const Card = ({ lobby, onClick }) => {
    return (
        <Box
            mb={3}
            sx={{
                "&:active": {
                    opacity: 0.4
                }
            }}
            onClick={onClick}
        >
            <LobbyInformation lobby={lobby} />
        </Box>
    )
}

import { inject, observer } from "mobx-react"
import React, { useEffect } from "react"
import { Share2, UserMinus, UserPlus } from "react-feather"
import { useParams } from "react-router-dom"
import { WhatsappShareButton } from "react-share"
import { Box, Text } from "rebass"
import { BasePage } from "../domains/layout/BasePage"
import { Section } from "../domains/layout/Section"
import { Interesteds } from "../domains/lobby/Interesteds"
import { LobbyInformation } from "../domains/lobby/LobbyCard"
import { IconButton } from "../sharedComponents/IconButton"
import { Map } from "../sharedComponents/Map"
import { formatDateTime } from "../utils/date"

export const AVATAR_SIZE = 40

const SHARE_MESSAGE = (lobby) => `
Pedais - *${lobby.name}*

Data: *${formatDateTime(new Date(lobby.date))}*

${lobby.distance ? `Distância: *${lobby.distance}km*` : ""}
${lobby.elevationGain ? `Ganho de elevação: *${lobby.elevationGain}m*` : ""}
${lobby.location ? `Local de saída: *${lobby.location}*` : ""}

${lobby.safetyInstructions ? `*Instruções de segurança*: 
${lobby.safetyInstructions}` : ""}

Confirme sua participação em: `

function Lobby({ lobbyStore }) {
    const { id } = useParams()
    const { lobby, currentUserIsInterested, toggleInterest, interested, fetchLobby: { pending: loadingFetchLobby }, lobbyIsPast } = lobbyStore
    const location = window.location

    useEffect(() => {
        lobbyStore.fetchLobby(id)
    }, [id, lobbyStore])

    const title = `Pedais - ${lobby?.name}`

    return (
        <BasePage title={title} noPadding loading={loadingFetchLobby}>
            {lobby && <>
                <LobbyInformation isPast={lobbyIsPast} lobby={lobby} />

                {!lobbyIsPast && <Box padding={2}>
                    <IconButton
                        Icon={currentUserIsInterested ? UserMinus : UserPlus}
                        loading={toggleInterest.pending}
                        onClick={() => toggleInterest(id)}>
                        {
                            currentUserIsInterested ? "Deixar de participar" : "Participar"
                        }
                    </IconButton>
                    <WhatsappShareButton style={{
                        width: "100%"
                    }} title={SHARE_MESSAGE(lobby)} url={location.href} >
                        <IconButton bg="positive" Icon={Share2}>
                            Divulgar pelo whats app
                        </IconButton>
                    </WhatsappShareButton>
                </Box>}

                <Box p={2} color="text">
                    <Section title="Informações gerais">
                        <p>
                            Data: {formatDateTime(new Date(lobby.date))}
                        </p>
                        <p>
                            Distância: {lobby.distance} <abbr title="kilometros por hora">km</abbr>
                        </p>
                        <p>
                            Ganho de elevação: {lobby.elevationGain} <abbr title="metros">m</abbr>
                        </p>
                        {lobby.creator && <p>
                            Criador: {lobby.creator.email}
                        </p>}
                    </Section>
                    <Section showIf={lobby.location} title="Local de partida">
                        <Text
                            sx={{
                                textTransform: "uppercase"
                            }}
                            fontFamily={"body"}
                            mb={2}
                        >
                            {lobby.location}
                        </Text>
                        <Map placeName={lobby.location}></Map>

                    </Section>

                    <Section title="Instruções de segurança" showIf={lobby.safetyInstructions}>
                        <p dangerouslySetInnerHTML={{ __html: lobby.safetyInstructions?.replace(/(?:\r\n|\r|\n)/g, "<br />") }}></p>
                    </Section>

                    <Section
                        showIf={interested.length > 0}
                        title={`Participantes (${interested.length})`}
                    >
                        <Interesteds interesteds={interested} />
                    </Section>
                </Box>
            </>}
        </BasePage>
    )
}

export default inject("lobbyStore")(observer(Lobby))

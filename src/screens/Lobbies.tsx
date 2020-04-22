import { inject, observer } from "mobx-react"
import React from "react"
import { PlusCircle } from "react-feather"
import { Box, Flex, Heading } from "rebass"
import { routes } from "../configuration/routes"
import { BasePage } from "../domains/layout/BasePage"
import { Card } from "../domains/lobby/LobbyCard"
import { IconButton } from "../sharedComponents/IconButton"
import { Switch } from "../sharedComponents/Switch"
import { lobbyIsPast } from "../stores/lobbyStore"
import { useGoTo } from "../utils/MainRouter"

function Section({ children, title, showIf = true, ifHidden = null, afterTitle }: { children: JSX.Element | JSX.Element[], title: string, showIf?: boolean, ifHidden?: JSX.Element | null, afterTitle?: JSX.Element }) {
    if (!showIf) return ifHidden
    return <Box>
        <Flex width={1} justifyContent="space-between">
            <Heading as="h1">{title}</Heading>
            {afterTitle}
        </Flex>

        <Box mt={2}>
            {children}
        </Box>
    </Box>
}

function Lobbies({ lobbiesStore }) {
    const { lobbies, myParties, fetchLobbies: { pending: loading }, toggleShowPast, showPast } = lobbiesStore

    const goToLobbyHook = useGoTo(routes.lobby)
    const goToAddLobby = useGoTo(routes.addLobby)


    function goToLobby(party) {
        goToLobbyHook({ id: party.id })
    }

    return (
        <BasePage loading={loading}>
            <IconButton onClick={goToAddLobby} mb={2} Icon={PlusCircle}>
                Criar pedal
            </IconButton>

            <Section showIf={myParties && myParties.length} title="Meus pedais">
                {myParties.map(party => (
                    <Card isPast={lobbyIsPast(party)} onClick={() => goToLobby(party)} key={party.id} lobby={party} />
                ))}
            </Section>

            <Section title="Próximos pedais" afterTitle={
                <Switch checked={showPast} onChange={toggleShowPast} label="Exibir passados" />
            }>

                {lobbies.map(party => (
                    <Card isPast={lobbyIsPast(party)} onClick={() => goToLobby(party)} key={party.id} lobby={party} />
                ))}

                {!lobbies?.length && <p>Nenhum pedal pra exibir</p>}
            </Section>
        </BasePage>
    )
}

export default inject("lobbiesStore")(observer(Lobbies))

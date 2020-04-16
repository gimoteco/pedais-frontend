import { inject, observer } from "mobx-react";
import React from "react";
import { PlusCircle } from "react-feather";
import { useHistory } from "react-router-dom";
import { Box, Heading } from "rebass";
import { BasePage } from "../domains/layout/BasePage";
import { Card } from "../domains/lobby/LobbyCard";
import { IconButton } from "../sharedComponents/IconButton";

function Section({ children, title, showIf = true }) {
  if (!showIf) return null
  return <Box>
    <Heading as="h1">{title}</Heading>
    <Box mt={2}>
      {children}
    </Box>
  </Box>
}

function Lobbies({ lobbiesStore }) {
  const { lobbies, myParties, fetchLobbies: { pending: loading } } = lobbiesStore;
  const history = useHistory();

  function goToLobby(lobby) {
    history.push(`/lobby/${lobby.id}`);
  }

  function goToAddLobby() {
    history.push(`/lobby/add`);
  }

  return (
    <BasePage loading={loading}>
      <IconButton onClick={goToAddLobby} mb={2} Icon={PlusCircle}>
        Criar pedal
      </IconButton>

      <Section showIf={myParties.length} title="Meus pedais">
        {myParties.map(party => (
          <Card onClick={() => goToLobby(party)} key={party.id} lobby={party} />
        ))}
      </Section>

      <Section title="Próximos pedais">
        {lobbies.map(lobby => (
          <Card onClick={() => goToLobby(lobby)} key={lobby.id} lobby={lobby} />
        ))}
      </Section>


    </BasePage>
  );
}

export default inject("lobbiesStore")(observer(Lobbies));

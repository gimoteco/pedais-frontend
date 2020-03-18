import React from "react";
import { inject, observer } from "mobx-react";
import { BasePage } from "../domains/layout/BasePage";
import { Card } from "../domains/lobby/LobbyCard";
import { PlusCircle } from "react-feather";
import { useHistory } from "react-router-dom";
import { IconButton } from "../sharedComponents/IconButton";

function Lobbies({ lobbiesStore }) {
  const { lobbies } = lobbiesStore;
  const history = useHistory();

  function goToLobby(lobby) {
    history.push(`/lobby/${lobby.id}`);
  }

  return (
    <BasePage>
      <IconButton mb={2} Icon={PlusCircle}>
        Criar pedal
      </IconButton>

      {lobbies.map(lobby => (
        <Card onClick={() => goToLobby(lobby)} key={lobby.id} lobby={lobby} />
      ))}
    </BasePage>
  );
}

export default inject("lobbiesStore")(observer(Lobbies));

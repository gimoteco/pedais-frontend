import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Share2, UserMinus, UserPlus } from "react-feather";
import { useParams } from "react-router-dom";
import { WhatsappShareButton } from 'react-share';
import { Box, Text } from "rebass";
import { BasePage } from "../domains/layout/BasePage";
import { Section } from "../domains/layout/Section";
import { Interesteds } from "../domains/lobby/Interesteds";
import { LobbyInformation } from "../domains/lobby/LobbyCard";
import { IconButton } from "../sharedComponents/IconButton";
import { Map } from "../sharedComponents/Map";

export const AVATAR_SIZE = 40;

function Lobby({ lobbyStore }) {
  const { id } = useParams();
  const { lobby, currentUserIsInterested, toggleInterest, interested, fetchLobby: { pending: loadingFetchLobby } } = lobbyStore;
  const location = window.location
  useEffect(() => {
    lobbyStore.fetchLobby(id);
  }, [id, lobbyStore]);
  const title = `Pedais - ${lobby?.name}`

  return (
    <BasePage title={title} noPadding loading={loadingFetchLobby}>
      {lobby && <>
        <LobbyInformation lobby={lobby} />

        <Box padding={2}>
          <IconButton
            Icon={currentUserIsInterested ? UserMinus : UserPlus}
            loading={toggleInterest.pending}
            onClick={() => toggleInterest(id)}>
            {
              currentUserIsInterested ? 'Deixar de participar' : 'Participar'
            }
          </IconButton>
          <WhatsappShareButton style={{
            width: '100%'
          }} title={title} url={location.href} >
            <IconButton bg="positive" Icon={Share2}>
              Divulgar pelo whats app
          </IconButton>
          </WhatsappShareButton>

        </Box>

        <Box p={2} color="text">
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

          <Section title="Segurança">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque.
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
  );
}

export default inject("lobbyStore")(observer(Lobby));

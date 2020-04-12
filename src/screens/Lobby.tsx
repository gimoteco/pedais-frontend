import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { BasePage } from "../domains/layout/BasePage";
import { LobbyInformation } from "../domains/lobby/LobbyCard";
import { Box, Text, Image } from "rebass";
import { UserPlus, UserMinus, Share2, User } from "react-feather";
import { IconButton } from "../sharedComponents/IconButton";
import { ImageWithPlaceholder } from "../domains/lobby/ImageWithPlaceholder";
import { Interesteds } from "../domains/lobby/Interesteds";

function Section({ title, children, showIf = true }) {
  if (!showIf) return null;

  return (
    <Box
      mb={3}
      sx={{
        textTransform: "uppercase",
        fontFamily: "body"
      }}
    >
      <Text
        fontFamily="body"
        fontSize={3}
        fontWeight="bold"
        mb={2}
        sx={{
          textTransform: "uppercase"
        }}
      >
        {title}
      </Text>

      {children}
    </Box>
  );
}

function AvatarPlaceholder({ sx }) {
  return (
    <Box
      display="inline-flex"
      width={40}
      height={40}
      color="white"
      bg="gray"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 99,
        ...sx
      }}
    >
      <User size={25} />
    </Box>
  );
}

const AVATAR_SIZE = 40;

export function Avatar({ user }) {
  return (
    <ImageWithPlaceholder
      url={user.avatarUrl}
      sx={{
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
      notLoadingDisplay="inline-block"
    />
  );
}

function Lobby({ lobbyStore }) {
  const { id } = useParams();
  const { lobby, currentUserIsInterested, interested, fetchLobby: { pending: loadingFetchLobby } } = lobbyStore;

  useEffect(() => {
    lobbyStore.fetchLobby(id);
  }, [id, lobbyStore]);


  return (
    <BasePage title={`Pedais - ${lobby?.name}`} noPadding loading={loadingFetchLobby}>
      <LobbyInformation lobby={lobby} />

      <Box padding={2}>
        <IconButton
          Icon={currentUserIsInterested ? UserMinus : UserPlus}
          loading={lobbyStore.toggleInterest.pending}
          onClick={() => lobbyStore.toggleInterest(id)}>
          {
            lobbyStore.currentUserIsInterested ? 'Deixar de participar' : 'Participar'
          }
        </IconButton>

        <IconButton bg="positive" Icon={Share2}>
          Compartilhar
        </IconButton>
      </Box>

      <Box p={2} color="text">
        <Section title="Local de partida">
          <Text
            sx={{
              textTransform: "uppercase"
            }}
            fontFamily={"body"}
            mb={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aut
            eos exercitationem nobis neque pariatur velit quas molestiae eaque
            est?
          </Text>

          <Image
            width={1}
            height={250}
            src="https://maps.googleapis.com/maps/api/staticmap?center=&zoom=13&scale=1&size=400x250&maptype=roadmap&key=AIzaSyDN46Q5BVfXgArF54AqYuwzTbrjhtXJGb8&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7CPosto+Faleiros"
          />
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
    </BasePage>
  );
}

export default inject("lobbyStore")(observer(Lobby));

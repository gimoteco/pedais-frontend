import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import { formatDateTime } from "../../utils/date";
import { Users, Map, ArrowUpRight } from "react-feather";
import { ImageWithPlaceholder } from "./ImageWithPlaceholder";
import { IconnedInformation } from "./IconnedInformation";
import { Gradient } from "./Gradient";

export function LobbyInformation({ lobby }) {
  return (
    <Box
      sx={{
        position: "relative"
      }}
    >
      <ImageWithPlaceholder width={1} height={300} url={lobby.coverImageUrl} />

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
    </Box>
  );
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
  );
};

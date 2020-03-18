import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import { useTheme } from "emotion-theming";
import { formatDateTime } from "../../utils/date";
import { Image as ImageIcon, Users, Map, ArrowUpRight } from "react-feather";
import { rgba } from "../../utils/color";
import { ImageWithPlaceholder } from "./ImageWithPlaceholder";

const Gradient = ({ children, ...props }) => {
  const theme: any = useTheme();
  return (
    <Flex
      justifyContent={"space-between"}
      bg={rgba(theme.colors.black, 0.4)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const IMAGE_HEIGHT = 300;

export const ImagePlaceholder = ({ sx }) => (
  <Flex
    bg="gray"
    height={IMAGE_HEIGHT}
    alignItems="center"
    justifyContent="center"
    color="white"
  >
    <ImageIcon size={80} />
  </Flex>
);

function IconnedInformation({ info, Icon, tip }) {
  return (
    <Flex
      color="white"
      alignItems="center"
      sx={{
        "&:not(:last-child)": {
          mr: 3
        }
      }}
    >
      <Icon alt={tip} size={24} />
      <Text variant="value" ml={1}>
        {info}
      </Text>
    </Flex>
  );
}

export function LobbyInformation({ lobby }) {
  return (
    <Box
      sx={{
        position: "relative"
      }}
    >
      <ImageWithPlaceholder url={lobby.imageUrl} />

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
            {formatDateTime(new Date(parseInt(lobby.date)))}
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

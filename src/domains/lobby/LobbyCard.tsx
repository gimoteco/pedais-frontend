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

export const ImagePlaceholder = () => (
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
    <Flex color="white" alignItems="center">
      <Icon alt={tip} size={24} />
      <Text fontSize={2} fontWeight="bold" fontFamily={"heading"} ml={1}>
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
        <Box fontSize={2}>
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
        </Box>

        <Box>
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
        </Box>
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

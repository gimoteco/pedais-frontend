import React from "react";
import { Flex, Image, Box } from "rebass";
import logo from "./Logo.svg";
import { Menu, ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { routes, HOME_ROUTE } from "../../configuration/routes";

export const Header = () => {
  const history = useHistory();
  const canGoBack = history.length;

  function back() {
    history.goBack();
  }

  function goHome() {
    history.push(HOME_ROUTE.path);
  }

  return (
    <Flex
      color={"white"}
      padding={3}
      justifyContent="center"
      alignItems="center"
      bg="primary"
    >
      <Box
        sx={{
          position: "absolute",
          left: 0
        }}
      >
        {canGoBack && <ChevronLeft onClick={back} size={36} />}
      </Box>

      <Image onClick={goHome} width="45%" src={logo} />
    </Flex>
  );
};

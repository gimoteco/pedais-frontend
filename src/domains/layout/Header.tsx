import React from "react";
import { Flex, Box } from "rebass";
import { ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => {
  const history = useHistory();
  const canGoBack = history.length;

  function back() {
    history.goBack();
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

      <Logo width="45%" />
    </Flex>
  );
};

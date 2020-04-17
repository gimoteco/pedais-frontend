import { inject, observer } from "mobx-react";
import React from "react";
import { ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { Box, Flex, Link } from "rebass";
import { routes } from "../../configuration/routes";
import { AuthStore } from "../../stores/authStore";
import { useGoTo } from "../../utils/MainRouter";
import { Logo } from "./Logo";

const Header = ({ authStore }: { authStore?: AuthStore }) => {
  const history = useHistory();
  const canGoBack = history.length;
  const goToLogin = useGoTo(routes.login)
  const { isLogged, logout } = authStore!

  function back() {
    history.goBack();
  }

  return (
    <Box>
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

        <Box
          sx={{
            position: "absolute",
            right: 0,
            Link: {
              fontWeight: 'bold'
            }
          }}
          pr={2}
        >
          {!isLogged && <Link onClick={goToLogin}>Entrar</Link>}
          {isLogged && <Link onClick={logout}>Sair</Link>}
        </Box>
      </Flex>
    </Box>
  );
};


export default inject("authStore")(observer(Header))
import React from "react";
import { Image } from "rebass";
import logo from "./Logo.svg";
import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "../../configuration/routes";

export const Logo = ({ width, ...props }) => {
  const history = useHistory();
  function goHome() {
    history.push(HOME_ROUTE.path);
  }
  return <Image onClick={goHome} src={logo} {...props} />;
};

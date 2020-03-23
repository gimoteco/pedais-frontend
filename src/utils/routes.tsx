import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { routes } from "../configuration/routes";

function PrivateRoute({ children, authStore, ...otherRouteProps }) {
  return authStore.loadingUser ? null : !authStore.isLogged ? (
    <Redirect
      to={{
        pathname: routes.login.path
      }}
    />
  ) : (
    <Route {...otherRouteProps}>{children}</Route>
  );
}

export default inject("authStore")(observer(PrivateRoute));

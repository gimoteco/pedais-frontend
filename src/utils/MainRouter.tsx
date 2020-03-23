import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "../configuration/routes";
import PrivateRoute from "./routes";

export function MainRouter() {
  return (
    <Router>
      <Switch>
        {Object.values(routes).map((route: any) => {
          const RouteType = route.private ? PrivateRoute : Route;
          return <RouteType key={route.path} {...route} />;
        })}
      </Switch>
    </Router>
  );
}

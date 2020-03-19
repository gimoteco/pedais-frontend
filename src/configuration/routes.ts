import ListLobbiesScreen from "../screens/Lobbies";
import LobbyScreen from "../screens/Lobby";
import Login from "../screens/Login";

export const routes = {
  lobbies: {
    path: "/",
    exact: true,
    component: ListLobbiesScreen
  },
  lobby: { path: "/lobby/:id", exact: true, component: LobbyScreen },
  login: { path: "/login", component: Login }
};

export const HOME_ROUTE = routes.lobbies;

import ListLobbiesScreen from "../screens/Lobbies";
import LobbyScreen from "../screens/Lobby";
import Login from "../screens/Login";
import AddLobby from "../screens/AddLobby";

export const routes = {
  lobbies: {
    path: "/",
    exact: true,
    component: ListLobbiesScreen
  },
  addLobby: { path: "/lobby/add", exact: true, component: AddLobby },
  lobby: { path: "/lobby/:id", exact: true, component: LobbyScreen },
  login: { path: "/login", component: Login }
};

export const HOME_ROUTE = routes.lobbies;

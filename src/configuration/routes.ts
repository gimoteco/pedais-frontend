import ListLobbiesScreen from "../screens/Lobbies";
import LobbyScreen from "../screens/Lobby";

const listLobbiesRouteParams = {
  path: "/",
  exact: true,
  component: ListLobbiesScreen
};

export const routes = {
  //   login: { path: "/login", component: LoginScreen },
  listLobbies: listLobbiesRouteParams,
  //   addLobby: { path: "/lobby/add", exact: true, component: AddLobbyScreen },
  lobby: { path: "/lobby/:id", exact: true, component: LobbyScreen }
};

export const HOME_ROUTE = routes.listLobbies;

import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import { Provider as StoreProvider } from "mobx-react";
import lobbiesStore from "./stores/lobbiesStore";
import lobbyStore from "./stores/lobbyStore";
import authStore from "./stores/authStore";
import Lobbies from "./screens/Lobbies";
import Lobby from "./screens/Lobby";

function App() {
  return (
    <Router>
      <StoreProvider {...{ lobbiesStore, lobbyStore, authStore }}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path={"/"} exact component={Lobbies} />
            <Route path={"/lobby/:id"} component={Lobby} />
          </Switch>
        </ThemeProvider>
      </StoreProvider>
    </Router>
  );
}

export default App;

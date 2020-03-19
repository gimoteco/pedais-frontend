import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import { Provider as StoreProvider } from "mobx-react";
import { routes } from "./configuration/routes";
import stores from "./stores";

function App() {
  return (
    <StoreProvider {...stores}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {Object.values(routes).map((route: any) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;

import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import { Provider as StoreProvider } from "mobx-react";
import stores from "./stores";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import { MainRouter } from "./utils/MainRouter";

Amplify.configure(awsConfig);

function App() {
  return (
    <StoreProvider {...stores}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;

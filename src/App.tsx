import { ApolloProvider } from "@apollo/react-hooks"
import Amplify from "aws-amplify"
import { ThemeProvider } from "emotion-theming"
import { Provider as StoreProvider } from "mobx-react"
import React from "react"
import awsConfig from "./aws-exports"
import { apolloClient } from "./configuration/graphql"
import stores from "./stores"
import { theme } from "./theme"
import { MainRouter } from "./utils/MainRouter"

Amplify.configure(awsConfig)

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <StoreProvider {...stores}>
                <ThemeProvider theme={theme}>
                    <MainRouter />
                </ThemeProvider>
            </StoreProvider>
        </ApolloProvider>

    )
}

export default App

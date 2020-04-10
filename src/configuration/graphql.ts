import ApolloClient from "apollo-boost";
import { Auth } from "aws-amplify";

async function getToken() {
  const user = await Auth.currentAuthenticatedUser()
  return user ? user.signInUserSession.idToken.jwtToken : null
}

console.log(process.env.REACT_APP_API_HOSTNAME)

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_HOSTNAME,
  request: async (operation) => {
    const token = await getToken()
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});
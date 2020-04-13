import ApolloClient from "apollo-boost";
import { getUser } from "../stores/authStore";

async function getToken() {
  const user = await getUser()
  return user?.token
}

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
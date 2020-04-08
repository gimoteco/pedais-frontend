import { action, computed, observable } from "mobx";
import { apolloClient } from "../configuration/graphql";
import { gql } from "apollo-boost";
import authStore, { AuthStore } from "./authStore";
import { loader } from "graphql.macro";
const addLobby = loader("./mutations/addLobby.graphql");

interface AddLobbyArgs {
  name: string
  distance: string
  elevationGain: string
  coverImage?: string
  date: Date
  group?: string
}

export class AddLobbyStore {
  @action add = async (args: AddLobbyArgs) => {
    const result = await apolloClient.mutate({
      mutation: addLobby,
      variables: {
        input: args
      }
    });
    return result?.data?.createParty;
  };
}

export default new AddLobbyStore();

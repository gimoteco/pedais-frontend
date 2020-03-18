import { action, computed, observable } from "mobx";
import { apolloClient } from "../configuration/graphql";
import { gql } from "apollo-boost";
import authStore, { AuthStore } from "./authStore";
import { Lobby, User } from "./types";
import { loader } from "graphql.macro";

const getLobby = loader("./queries/getLobby.graphql");

export class LobbyStore {
  @observable lobby: Lobby | null = null;
  @observable interested: User[] = [];
  authStore: AuthStore;

  constructor(authStore) {
    this.authStore = authStore;
  }

  @action markAsInterested = async (id: string) => {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation markAsInterested($id: ID!) {
          lobby(id: $id) {
            markAsInterested
          }
        }
      `,
      variables: {
        id
      }
    });
    const currentUser = this.authStore.currentUser;
    this.interested = [
      {
        id: currentUser.id,
        name: currentUser.name,
        avatarUrl: currentUser.avatarUrl
      },
      ...this.interested
    ];
    return result;
  };

  @action fetchLobby = async (id: string) => {
    const result = await apolloClient.query({
      query: getLobby,
      variables: {
        id
      }
    });
    this.lobby = result.data.lobby;
    this.interested = result.data.lobby.interested;
  };

  @computed get currentUserIsInterested() {
    return (
      this.authStore.isLogged &&
      this.interested.map(i => i.id).includes(this.authStore.currentUser.id)
    );
  }
}

export default new LobbyStore(authStore);

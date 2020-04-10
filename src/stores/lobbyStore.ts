import { computed, observable } from "mobx";
import { apolloClient } from "../configuration/graphql";
import { gql } from "apollo-boost";
import authStore, { AuthStore } from "./authStore";
import { Lobby, User } from "./types";
import { loader } from "graphql.macro";
import { task } from "mobx-task";

const getLobby = loader("./queries/getLobby.graphql");

export class LobbyStore {
  authStore: AuthStore;
  @observable lobby: Lobby | null = null;
  @observable interested: User[] = [];

  constructor(authStore) {
    this.authStore = authStore;
  }

  @task.resolved markAsInterested = async (id: string) => {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation markAsInterested($id: String!) {
          markAsInterested(id: $id) 
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
        email: currentUser.email,
        avatarUrl: currentUser.avatarUrl
      },
      ...this.interested
    ];
    return result;
  };

  @task fetchLobby = async (id: string) => {
    const result = await apolloClient.query({
      query: getLobby,
      variables: {
        id
      }
    });
    this.lobby = result.data.party;
    this.interested = result.data.party.interested;
  };

  @computed get currentUserIsInterested() {
    return (
      this.authStore.isLogged &&
      this.interested.map(i => i.id).includes(this.authStore.currentUser.id)
    );
  }
}

export default new LobbyStore(authStore);

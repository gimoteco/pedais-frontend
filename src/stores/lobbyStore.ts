import { gql } from "apollo-boost";
import { loader } from "graphql.macro";
import { computed, observable } from "mobx";
import { task } from "mobx-task";
import { apolloClient } from "../configuration/graphql";
import authStore, { AuthStore } from "./authStore";
import { Lobby, User } from "./types";

const getLobby = loader("./queries/getLobby.graphql");

export class LobbyStore {
  authStore: AuthStore;
  @observable lobby: Lobby | null = null;
  @observable interested: User[] = [];

  constructor(authStore) {
    this.authStore = authStore;
  }

  @task.resolved toggleInterest = async (id: string) => {
    const result = await apolloClient.mutate({
      mutation: gql`
        mutation toggleInterest($id: String!) {
          toggleInterest(id: $id) 
        }
      `,
      variables: {
        id
      }
    });

    const currentUser = this.authStore.domainUser;

    this.interested = this.currentUserIsInterested ? this.interested.filter(i => i.id !== currentUser.id) : [
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
      this.interested.map(i => i.id).includes(this.authStore.domainUser?.id)
    );
  }
}

export default new LobbyStore(authStore);

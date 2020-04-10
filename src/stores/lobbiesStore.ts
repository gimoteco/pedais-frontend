import { observable } from "mobx";
import { apolloClient } from "../configuration/graphql";
import { Lobby } from "./types";
import { loader } from "graphql.macro";
import { task } from 'mobx-task'

const getLobbies = loader("./queries/getLobbies.graphql");

export class LobbiesStore {
  @observable lobbies: Lobby[] = [];
  @observable uploadUrl?: string;

  constructor() {
    this.fetchLobbies();
  }

  @task fetchLobbies = async () => {
    const result = await apolloClient.query({
      query: getLobbies
    });
    this.lobbies = result.data.parties;
  };
}

export default new LobbiesStore();

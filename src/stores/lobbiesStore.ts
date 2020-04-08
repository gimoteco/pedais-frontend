import { action, observable } from "mobx";
import { apolloClient } from "../configuration/graphql";
import { Lobby } from "./types";
import { loader } from "graphql.macro";

const getLobbies = loader("./queries/getLobbies.graphql");


export class LobbiesStore {
  @observable lobbies: Lobby[] = [];
  @observable uploadUrl?: string;

  constructor() {
    this.fetchLobbies();
  }

  @action fetchLobbies = async () => {
    const result = await apolloClient.query({
      query: getLobbies
    });
    this.lobbies = result.data.parties;
  };
}

export default new LobbiesStore();

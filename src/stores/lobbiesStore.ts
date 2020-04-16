import { loader } from "graphql.macro";
import { observable } from "mobx";
import { task } from 'mobx-task';
import { apolloClient } from "../configuration/graphql";
import { Lobby } from "./types";

const getLobbies = loader("./queries/getLobbies.graphql");

export class LobbiesStore {
  @observable lobbies: Lobby[] = [];
  @observable myParties: Lobby[] = [];
  @observable uploadUrl?: string;

  constructor() {
    this.fetchLobbies();
  }

  @task fetchLobbies = async () => {
    const result = await apolloClient.query({
      query: getLobbies
    });
    this.lobbies = result.data.nextParties;
    this.myParties = result.data.myParties;
  };
}

export default new LobbiesStore();

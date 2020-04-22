import { loader } from "graphql.macro"
import { action, observable, reaction } from "mobx"
import { task } from "mobx-task"
import { apolloClient } from "../configuration/graphql"
import { Lobby } from "./types"

const getLobbies = loader("./queries/getLobbies.graphql")

export class LobbiesStore {
    @observable lobbies: Lobby[] = [];
    @observable myParties: Lobby[] = [];
    @observable uploadUrl?: string;
    @observable showPast = false;

    constructor() {
        this.fetchLobbies()

        reaction(() => this.showPast, this.fetchLobbies)
    }

    @task fetchLobbies = async () => {
        const result = await apolloClient.query({
            query: getLobbies,
            variables: {
                showPast: this.showPast
            }
        })
        this.lobbies = result.data.parties ?? []
        this.myParties = result.data.myParties ?? []
    };

    @action toggleShowPast = () => {
        this.showPast = !(this.showPast)
    }

}

export default new LobbiesStore()

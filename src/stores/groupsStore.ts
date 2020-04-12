import { observable } from "mobx"
import { task } from "mobx-task"
import { apolloClient } from "../configuration/graphql"
import { loader } from "graphql.macro";

const getGroups = loader("./queries/getGroups.graphql");

class GroupStore {
    @observable groups = []

    constructor() {
        this.fetchGroups()
    }

    @task async fetchGroups() {
        const { data } = await apolloClient.query({
            query: getGroups
        })
        this.groups = data.groups;
    }
}

export default new GroupStore()
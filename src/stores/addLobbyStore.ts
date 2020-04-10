import { apolloClient } from "../configuration/graphql";
import { loader } from "graphql.macro";
import { task } from "mobx-task";
import { uploadFileAsset } from "../utils/asset";

const addLobby = loader("./mutations/addLobby.graphql");

interface AddLobbyArgs {
  name: string
  distance: string
  elevationGain: string
  coverImage?: File
  date: Date
  group?: string
}

export class AddLobbyStore {
  @task.resolved add = async (args: AddLobbyArgs) => {
    let newFilename

    if (args.coverImage)
      newFilename = await uploadFileAsset(args.coverImage)

    const result = await apolloClient.mutate({
      mutation: addLobby,
      variables: {
        input: { ...args, coverImage: newFilename }
      }
    });
    return result?.data?.createParty;
  };
}

export default new AddLobbyStore();

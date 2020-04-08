import { apolloClient } from "../configuration/graphql";
import { loader } from "graphql.macro";

const getUploadUrl = loader("../stores/queries/getUploadUrl.graphql");

interface AssetUpload {
    id: string;
    url: string;
}
async function generateUploadUrl(filename): Promise<AssetUpload> {
    return (await apolloClient.query({
        query: getUploadUrl,
        variables: { filename }
    })).data.uploadUrl;
};

function uploadFile(file, signedRequest) {
    const options = {
        method: 'PUT',
        body: file
    };
    return fetch(signedRequest, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
        });
}

function getExtension(filename: string) {
    return filename.split('.').pop();
}

export async function uploadFileAsset(file: File) {
    const { url, id } = await generateUploadUrl(file.name)
    const newFilename = `${id}.${getExtension(file.name)}`
    const renamedFile = new File([file], newFilename, { type: file.type })
    await uploadFile(renamedFile, url)
    return newFilename
}

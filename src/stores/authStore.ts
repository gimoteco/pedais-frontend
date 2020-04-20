import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import { Auth, Hub } from "aws-amplify"
import { loader } from "graphql.macro"
import { action, computed, observable } from "mobx"
import { task } from "mobx-task"
import { apolloClient } from "../configuration/graphql"
const meQuery = loader("./queries/me.graphql")

export async function getUser() {
    let user
    try {
        user = await Auth.currentAuthenticatedUser()
    }
    catch (e) {
        user = null
    }
    return user ? {
        id: user.attributes.sub,
        email: user.attributes.email,
        token: user.signInUserSession.idToken.jwtToken
    } : null
}

export class AuthStore {
    @observable currentUser: any = null;
    @observable domainUser: any = null;
    @observable loadingUser = true;

    constructor() {
        Hub.listen("auth", async ({ payload: { event } }) => {
            switch (event) {
                case "signIn":
                    this.currentUser = await getUser()
                    this.loadingUser = false
                    break
            }
        })

        this.loadCurrentUser()
    }

    loadCurrentUser = async () => {
        this.currentUser = await getUser()
        this.loadingUser = false
        await this.fetchCurrentUser()
    };

    @task.resolved login = (email, password) => {
        return Auth.signIn(email, password)
    };

    @action loginWithFacebook = () => {
        return Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook
        })
    };

    @action logout = () => {
        Auth.signOut().then(() => {
            this.currentUser = null
        })
    };

    @task async fetchCurrentUser() {
        const userResponse = await apolloClient.query({ query: meQuery })
        this.domainUser = userResponse.data.me
    }

    @computed get isLogged() {
        return this.currentUser != null
    }

    @computed get token() {
        return this.currentUser ? this.currentUser.token : null
    }
}

export default new AuthStore()

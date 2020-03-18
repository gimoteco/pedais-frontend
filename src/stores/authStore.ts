import {action, computed, observable} from "mobx";
import {Auth, Hub} from "aws-amplify";

export class AuthStore {
    @observable currentUser: any = null;

    constructor() {
        Hub.listen("auth", async ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    const user = await Auth.currentAuthenticatedUser()
                    this.currentUser = {
                        id: user.attributes.sub,
                        email: user.attributes.email,
                    } as any;

                    break;
            }
        })

        Auth.currentAuthenticatedUser().then(user => {
            if (user) {
                this.currentUser = {
                    id: user.attributes.sub,
                    email: user.attributes.email,
                } as any
            }
        })
    }

    @action login = () => {
        // this.currentUser = user;
        return Promise.resolve()
    }

    @action logout = () => {
        Auth.signOut().then(() => {
            this.currentUser = null;
        })
    }

    @computed get isLogged() {
        return this.currentUser != null
    }
}

export default new AuthStore()

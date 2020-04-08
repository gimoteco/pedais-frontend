import { action, computed, observable } from "mobx";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export class AuthStore {
  @observable currentUser: any = null;
  @observable loadingUser = true;

  constructor() {
    Hub.listen("auth", async ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          const user = await Auth.currentAuthenticatedUser();
          console.log(user)
          this.currentUser = {
            id: user.attributes.sub,
            email: user.attributes.email,
            token: user.signInUserSession.accessToken
          } as any;
          this.loadingUser = false;

          break;
      }
    });

    this.loadCurrentUser();
  }

  loadCurrentUser = async () => {
    await Auth.currentAuthenticatedUser().then(user => {
      if (user) {
        console.log(user)
        this.currentUser = {
          id: user.attributes.sub,
          email: user.attributes.email,
          token: user.signInUserSession.accessToken
        } as any;
      }
      this.loadingUser = false;
    });
  };

  @action login = () => {
    // this.currentUser = user;
    return Promise.resolve();
  };

  @action loginWithFacebook = () => {
    return Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook
    });
  };

  @action logout = () => {
    Auth.signOut().then(() => {
      this.currentUser = null;
    });
  };

  @computed get isLogged() {
    return this.currentUser != null;
  }

  @computed get token() {
    return this.currentUser ? this.currentUser.token : null;
  }
}

export default new AuthStore();

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";
import { action, computed, observable } from "mobx";

export async function getUser() {
  let user;
  try {
    user = await Auth.currentAuthenticatedUser();
  }
  catch (e) {
    user = null
  }
  return user ? {
    id: user.attributes.sub,
    email: user.attributes.email,
    token: user.signInUserSession.accessToken
  } : null;
}

export class AuthStore {
  @observable currentUser: any = null;
  @observable loadingUser = true;

  constructor() {
    Hub.listen("auth", async ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.currentUser = await getUser();
          this.loadingUser = false;
          break;
      }
    });

    this.loadCurrentUser();
  }

  loadCurrentUser = async () => {
    this.currentUser = await getUser();
    this.loadingUser = false;
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

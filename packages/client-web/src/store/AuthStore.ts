import RootStore from './RootStore';
import { action, observable } from 'mobx';

class AuthStore {
  rootStore: RootStore;

  @observable loggedIn: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  setAccessToken = (accessToken: string) => {
    localStorage.setItem('__BFN_ACCESS_TOKEN__', accessToken);

    this.setLoggedIn(true);
  };

  @action
  setLoggedIn = (loggedIn?: boolean) => {
    this.loggedIn = loggedIn === undefined ? !this.loggedIn : loggedIn;
  };
}

export default AuthStore;

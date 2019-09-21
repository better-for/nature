import UiStore from './UiStore';
import AuthStore from './AuthStore';

class RootStore {
  uiStore: UiStore;
  authStore: AuthStore;

  constructor() {
    this.uiStore = new UiStore(this);
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;

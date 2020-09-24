import UIStore from './UIStore';
import AuthStore from './AuthStore';

class RootStore {
  uiStore: UIStore;
  authStore: AuthStore;

  constructor() {
    this.uiStore = new UIStore(this);
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;

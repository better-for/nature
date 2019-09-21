import RootStore from './RootStore';

class UiStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}

export default UiStore;

import RootStore from '../RootStore';
import { observable, action } from 'mobx';
import Navigation from './Navigation';

class UiStore {
  rootStore: RootStore;
  navigation: Navigation;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.navigation = new Navigation(rootStore);
  }
}

export default UiStore;

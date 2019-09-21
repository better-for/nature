import RootStore from '../RootStore';
import { observable, action } from 'mobx';

class Navigation {
  rootStore: RootStore;

  @observable opened = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  open = () => {
    this.opened = true;
  };

  @action
  close = () => {
    this.opened = false;
  };

  @action
  toggle = () => {
    this.opened = !this.opened;
  };
}

export default Navigation;

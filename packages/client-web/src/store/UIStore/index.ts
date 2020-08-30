import RootStore from '../RootStore';
import BlogStore from './BlogStore';

class UIStore {
  rootStore: RootStore;
  blogStore: BlogStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.blogStore = new BlogStore(rootStore);
  }
}

export default UIStore;

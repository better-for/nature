import RootStore from '../RootStore';
import { observable, action, flow } from 'mobx';
import ApiStore from '../apiStore';
import { ActionStatus } from 'src/constants';
import { getBlogs } from 'src/apis/blogs';

class BlogStore extends ApiStore {
  rootStore: RootStore;
  @observable blogsData = [];

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  @action.bound
  fetchBlogs = flow(function*() {
    if (this.status === ActionStatus.Request) return;
    try {
      this.onRequest();
      const { data: blogsData } = yield getBlogs();
      this.blogsData = blogsData;
      this.onSuccess();
    } catch (error) {
      this.onFailure();
    }
  });
}

export default BlogStore;

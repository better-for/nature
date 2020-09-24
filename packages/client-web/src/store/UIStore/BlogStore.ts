import RootStore from '../RootStore';
import { observable, action, flow } from 'mobx';
import ApiStore from '../apiStore';
import { ActionStatus } from 'src/constants';
import { Blogs, getBlogs } from 'src/apis/blogs';

class BlogStore extends ApiStore {
  rootStore: RootStore;

  @observable blogsData: Blogs['data'] = [];

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
  }

  @action.bound
  fetchBlogs = async () => {
    if (this.status === ActionStatus.Request) return;
    try {
      this.onRequest();
      const { data } = await getBlogs();
      this.blogsData = data;
      this.onSuccess();
    } catch (error) {
      this.onFailure();
    }
  };
}

export default BlogStore;

import axios from './config';

import { APIError } from 'src/types/error';

export type Blogs = {
  title: string;
  url: string;
  image: string | null;
  description: string;
  id: number;
}[];

const BLOGS_ENDPOINT = 'blog/';

export const getBlogs = (): Promise<Blogs | APIError> =>
  axios.get(BLOGS_ENDPOINT);


import { PostInterface } from '../components/post/state/post.model';
import { postReducer } from '../components/post/state/post.reducer';

export interface Appstate {
  posts: PostInterface[];
}
export const appReducer = {
  posts: postReducer,
};

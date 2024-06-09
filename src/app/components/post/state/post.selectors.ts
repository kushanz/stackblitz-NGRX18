import { PostInterface } from './post.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getPostState = createFeatureSelector<PostInterface>('posts');

export const getPostById = createSelector(getPostState, (state:any, props:any) => {
  return state.find((post:any) => post.id == props.id);
});

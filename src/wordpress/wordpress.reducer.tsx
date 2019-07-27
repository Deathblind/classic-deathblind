import {combineReducers} from "redux";
import {postsReducer, PostsState} from "./posts/posts.reducer";
import {AuthorsState, authorsReducer} from "./authors/authors.reducer";

export interface WordpressState {
    posts: PostsState;
    authors: AuthorsState;
}

export const wordpressReducer = combineReducers<WordpressState>({
    posts: postsReducer,
    authors: authorsReducer
});
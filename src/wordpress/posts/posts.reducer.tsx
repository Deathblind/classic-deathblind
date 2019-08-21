import { createLoadReducer } from "../../store/utility/load/reducer";
import { loadPosts, loadPostsComplete } from "./posts.action";
import { AsyncState } from "../../store/utility/async/state";
import { Post } from "./posts.interface";

export interface PostsState extends AsyncState<Post[]> {}

export const postsReducer = createLoadReducer<Post[]>(
    loadPosts.type,
    loadPostsComplete.type
);

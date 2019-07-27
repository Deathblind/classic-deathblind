import {createAction} from "redux-starter-kit";
import {LoadAction, LoadCompleteAction} from "../../store/utility/load/action";
import {Post} from "./posts.interface";

export const loadPosts = createAction<LoadAction>("@@wordpress/LOAD_POSTS");
export const loadPostsComplete = createAction<LoadCompleteAction<Post[]>>("@@wordpress/LOAD_POSTS_COMPLETE");
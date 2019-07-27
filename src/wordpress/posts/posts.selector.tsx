import {compose} from "ramda";
import {getWordpress} from "../wordpress.selector";
import {createSelector} from "reselect";

export const getPosts = compose(
    ({ posts }) => posts,
    getWordpress
);

export const getPostsData = compose(
    ({data}) => data || [],
    getPosts
);

export const getPostsAsIds = createSelector(
    getPostsData,
    posts => posts.map(({id}) => id)
);

export const getPostById = (id: number) => createSelector(
    getPostsData,
    posts => posts.find(post => post.id === id)
);
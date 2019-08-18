import sortWith from "ramda/es/sortWith";
import { Post } from "./posts.interface";
import descend from "ramda/es/descend";
import ascend from "ramda/es/ascend";

export const sortPostsByDate = sortWith<Post>([
    descend(({ date }) => +new Date(date))
]);

export const sortPostsById = sortWith<Post>([ascend(({ id }) => id)]);

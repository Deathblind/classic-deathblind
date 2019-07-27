import sortWith from "ramda/es/sortWith";
import {Post} from "./posts.interface";
import descend from "ramda/es/descend";

export const sortPostsByDate = sortWith<Post>([
    descend(({date}) => +(new Date(date)))
]);
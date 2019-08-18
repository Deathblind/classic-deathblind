import { get } from "../../http/instance";
import { Post } from "./posts.interface";

export const fetchPosts = () => get<Post[]>("/posts?_embed&per_page=100");

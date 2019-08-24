import { Tags } from "../tags/tags.interface";
import { Post } from "./posts.interface";
import { Categories } from "../categories/categories.interface";

export const isOfTag = (tag: Tags) => (post: Post | null) =>
    Boolean(post && post.tags.includes(tag));

export const isOfCategory = (category: Categories) => (post: Post | null) =>
    Boolean(post && post.categories.includes(category));

export const isIntroduction = (id: number | null) => id === 1865;

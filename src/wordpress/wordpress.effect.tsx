import {combineEpics} from "redux-observable";
import {postsEpic} from "./posts/posts.effect";
import {authorsEpic} from "./authors/authors.effect";

export const wordpressEpic = combineEpics(postsEpic, authorsEpic);
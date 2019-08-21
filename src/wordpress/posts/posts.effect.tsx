import {
    Epic,
    ofType,
    combineEpics,
    StateObservable,
    ActionsObservable
} from "redux-observable";
import { Action } from "redux";
import { loadPosts, loadPostsComplete } from "./posts.action";
import { switchMap, map, filter, catchError } from "rxjs/operators";
import { fetchPosts } from "./posts.http";
import { sortPostsById } from "./posts.sort";
import { RootState } from "../../store/root";
import { getPosts } from "./posts.selector";
import { Post } from "./posts.interface";

const initialData: Post[] = require("./posts.initial-state.json");

const loadPostsEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        ofType(loadPosts),
        filter(() => !Boolean(getPosts(state$.value).data)),
        switchMap(() => (initialData ? [initialData] : fetchPosts())),
        map(sortPostsById),
        map(posts =>
            loadPostsComplete({
                data: posts
            })
        ),
        catchError(error => [loadPostsComplete({ error, data: null })])
    );

export const postsEpic = combineEpics(loadPostsEpic);

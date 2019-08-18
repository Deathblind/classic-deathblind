import {
    Epic,
    ofType,
    combineEpics,
    StateObservable,
    ActionsObservable
} from "redux-observable";
import { Action } from "redux";
import { loadPosts, loadPostsComplete } from "./posts.action";
import { switchMap, map, filter } from "rxjs/operators";
import { fetchPosts } from "./posts.http";
import { sortPostsByDate } from "./posts.sort";
import { getPosts } from "./posts.selector";
import { RootState } from "../../store/root";

const loadPostsEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        ofType(loadPosts),
        filter(() => !Boolean(getPosts(state$.value).data)),
        switchMap(fetchPosts),
        map(sortPostsByDate),
        map(posts =>
            loadPostsComplete({
                data: posts
            })
        )
    );

export const postsEpic = combineEpics(loadPostsEpic);

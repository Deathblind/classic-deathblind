import {Epic, ofType, combineEpics} from "redux-observable";
import {Observable} from "rxjs";
import {Action} from "redux";
import {loadPosts, loadPostsComplete} from "./posts.action";
import {switchMap, map} from "rxjs/operators";
import {fetchPosts} from "./posts.http";
import {sortPostsByDate} from "./posts.sort";

const loadPostsEpic: Epic = (action$: Observable<Action>) => action$.pipe(
    ofType(loadPosts),
    switchMap(fetchPosts),
    map(sortPostsByDate),
    map(posts => loadPostsComplete({
        data: posts
    })),
);

export const postsEpic = combineEpics(loadPostsEpic);
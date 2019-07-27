import {Epic, ofType, combineEpics} from "redux-observable";
import {Observable} from "rxjs";
import {Action} from "redux";
import {switchMap, map} from "rxjs/operators";
import {fetchYoutubeVideos} from "./youtube.http";
import {loadVideos, loadVideosComplete} from "./youtube.action";

const loadAuthorsEpic: Epic = (action$: Observable<Action>) => action$.pipe(
    ofType(loadVideos),
    switchMap(fetchYoutubeVideos),
    map(authors => loadVideosComplete({
        data: authors
    })),
);

export const authorsEpic = combineEpics(loadAuthorsEpic);
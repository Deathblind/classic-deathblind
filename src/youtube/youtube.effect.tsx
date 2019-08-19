import { Epic, ofType, combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import { Action } from "redux";
import { switchMap, map, catchError } from "rxjs/operators";
import { fetchYoutubeVideos } from "./youtube.http";
import { loadVideos, loadVideosComplete } from "./youtube.action";
import { sortVideosByDate } from "./youtube.sort";

const loadYoutubeEpic: Epic = (action$: Observable<Action>) =>
    action$.pipe(
        ofType(loadVideos),
        switchMap(fetchYoutubeVideos),
        map(videos => ({
            ...videos,
            items: sortVideosByDate(videos.items)
        })),
        map(videos =>
            loadVideosComplete({
                data: videos
            })
        ),
        catchError(error => [loadVideosComplete({ error, data: null })])
    );

export const youtubeEpic = combineEpics(loadYoutubeEpic);

import {Epic, ofType, combineEpics} from "redux-observable";
import {Observable} from "rxjs";
import {Action} from "redux";
import {switchMap, map} from "rxjs/operators";
import {fetchAuthors} from "./authors.http";
import {loadAuthorsComplete, loadAuthors} from "./authors.action";

const loadAuthorsEpic: Epic = (action$: Observable<Action>) => action$.pipe(
    ofType(loadAuthors),
    switchMap(fetchAuthors),
    map(authors => loadAuthorsComplete({
        data: authors
    })),
);

export const authorsEpic = combineEpics(loadAuthorsEpic);
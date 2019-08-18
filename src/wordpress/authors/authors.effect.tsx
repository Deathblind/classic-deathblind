import {
    Epic,
    ofType,
    combineEpics,
    ActionsObservable,
    StateObservable
} from "redux-observable";
import { Observable } from "rxjs";
import { Action } from "redux";
import { switchMap, map, filter } from "rxjs/operators";
import { fetchAuthors } from "./authors.http";
import { loadAuthorsComplete, loadAuthors } from "./authors.action";
import { RootState } from "../../store/root";
import { getAuthors } from "./authors.selector";

const loadAuthorsEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootState>
) =>
    action$.pipe(
        ofType(loadAuthors),
        filter(() => !Boolean(getAuthors(state$.value).data)),
        switchMap(fetchAuthors),
        map(authors =>
            loadAuthorsComplete({
                data: authors
            })
        )
    );

export const authorsEpic = combineEpics(loadAuthorsEpic);

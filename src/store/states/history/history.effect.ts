import { map, startWith, filter } from "rxjs/operators";
import { history } from "./history";
import { Action as HistoryAction, Location } from "history";
import { Observable } from "rxjs";
import { changeLocation } from "./history.actions";

const history$ = new Observable<{
    location: Location;
    action: HistoryAction;
}>(observer => {
    if (!history) {
        return observer;
    }

    history.listen((location, action) => {
        observer.next({ location, action });
    });

    return observer;
});

export const historyEpic = () =>
    history$.pipe(
        startWith({
            location: history ? history.location : null,
            action: "PUSH"
        }),
        filter(({ location }) => Boolean(location)),
        map(({ location }) => changeLocation(location!))
    );

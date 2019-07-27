import { historyEpic } from "./history.effect";
import { first } from "rxjs/operators";
import { LOCATION_CHANGE } from "./history.actions";

it("should listen on location changes", done => {
    historyEpic()
        .pipe(first())
        .subscribe(action => {
            expect(action.type).toEqual(LOCATION_CHANGE);
            expect(action.payload.pathname).toEqual("/");
            done();
        });
});

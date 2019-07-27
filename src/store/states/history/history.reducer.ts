import { Location } from "history";
import { LocationChangeAction, LOCATION_CHANGE } from "./history.actions";

export const historyReducer = (
    state: Location | null = null,
    action: LocationChangeAction
) => {
    if (action.type === LOCATION_CHANGE) {
        return action.payload;
    }

    return state;
};

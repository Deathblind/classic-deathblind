import { type } from "../../utility/action";
import { Action } from "redux";
import { Location } from "history";

export const LOCATION_CHANGE = type("@@router/LOCATION_CHANGE");

export interface LocationChangeAction extends Action {
    payload: Location;
}

export const changeLocation = (location: Location): LocationChangeAction => ({
    type: LOCATION_CHANGE,
    payload: location
});

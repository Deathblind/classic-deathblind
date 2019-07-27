import GoogleAnalytics, { trackPageView } from "@redux-beacon/google-analytics";
import {
    LOCATION_CHANGE,
    LocationChangeAction
} from "./states/history/history.actions";

export const gAnalytics = GoogleAnalytics();

const pageView = trackPageView(a => {
    const action = a as LocationChangeAction;

    return {
        page: `${action.payload!.pathname}${action.payload!.search}`,
        location: action.payload!.pathname
    };
});

export const eventMap = {
    [LOCATION_CHANGE]: pageView
};

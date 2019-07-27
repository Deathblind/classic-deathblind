import { eventMap } from "./analytics";
import { LOCATION_CHANGE } from "./states/history/history.actions";

it("should listen to location change events", () => {
    expect(eventMap[LOCATION_CHANGE]).toBeDefined();
});

it("should fire a trackPageView action on location change", () => {
    const event = eventMap[LOCATION_CHANGE];
    const expected = {
        customTrackerId: undefined,
        hitType: "pageview",
        location: "foobar",
        page: "foobar",
        title: undefined
    };

    const result = event(
        {
            type: LOCATION_CHANGE,
            payload: {
                pathname: "foobar",
                search: "",
                state: {},
                hash: ""
            }
        },
        {},
        {}
    );

    expect(result).toEqual(expected);
});

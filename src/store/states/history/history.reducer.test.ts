import { historyReducer } from "./history.reducer";
import { changeLocation } from "./history.actions";

it("should set the location", () => {
    const result = historyReducer(
        undefined,
        changeLocation({
            pathname: "foobar",
            search: "",
            state: {},
            hash: ""
        })
    );

    expect(result).toBeTruthy();
    expect(result!.pathname).toEqual("foobar");
});

it("should not set the location", () => {
    const result = historyReducer(undefined, {
        type: "Foobar",
        payload: {
            pathname: "foobar",
            search: "",
            state: {},
            hash: ""
        }
    });

    expect(result).toBeFalsy();
});

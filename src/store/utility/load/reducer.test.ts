import { createMultipleLoadReducer, createLoadReducer } from "./reducer";

describe("createMultipleLoadReducer", () => {
    it("should listen to the load action", () => {
        const reducer = createMultipleLoadReducer("foo", "bar");
        const state = reducer(
            { 1: { loading: false, firstLoad: false, data: 1, error: null } },
            {
                type: "foo",
                payload: "foobar",
                id: 1
            } as any
        );

        expect(state[1]!.firstLoad).toBeFalsy();
        expect(state[1]!.loading).toBeTruthy();
    });

    it("should should listen to the load complete action", () => {
        const reducer = createMultipleLoadReducer("foo", "bar");
        const state = reducer(
            { 1: { loading: true, firstLoad: true, data: null, error: null } },
            {
                type: "bar",
                payload: "foobar",
                id: 1
            } as any
        );

        expect(state[1]!.loading).toBeFalsy();
        expect(state[1]!.firstLoad).toBeFalsy();
        expect(state[1]!.data).toEqual("foobar");
    });
});

describe("createLoadReducer", () => {
    it("should listen to the load action", () => {
        const reducer = createLoadReducer("foo", "bar");
        const state = reducer(
            { loading: false, firstLoad: false, data: 1, error: null },
            { type: "foo" }
        );

        expect(state.loading).toBeTruthy();
        expect(state.firstLoad).toBeFalsy();
    });

    it("should should listen to the load complete action", () => {
        const reducer = createLoadReducer("foo", "bar");
        const state = reducer(
            { loading: true, firstLoad: true, data: null, error: null },
            {
                type: "bar",
                payload: "foobar"
            } as any
        );

        expect(state.loading).toBeFalsy();
        expect(state.data).toEqual("foobar");
    });
});

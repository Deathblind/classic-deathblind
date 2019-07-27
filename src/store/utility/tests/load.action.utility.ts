/* istanbul ignore next */

import { Reducer } from "redux";
import { LoadMultipleAction } from "../load/action";

export function createLoadMultipleActionTest(
    reducer: Reducer<any, any>,
    action: LoadMultipleAction
) {
    it("Should create an async state", () => {
        const result = reducer(undefined, action);
        const expected = {
            data: null,
            loading: true,
            firstLoad: true,
            error: null
        };

        expect(result[action.id]).toEqual(expected);
    });

    it("Should reset loading", () => {
        const expected = {
            data: {},
            loading: true,
            firstLoad: false,
            error: null
        };

        const state = {
            [action.id]: {
                ...expected,
                loading: false,
                firstLoad: false
            }
        };

        const result = reducer(state, action);

        expect(result[action.id]).toEqual(expected);
    });

    it("Should reset error", () => {
        const expected = {
            data: null,
            loading: true,
            firstLoad: false,
            error: null
        };

        const state = {
            [action.id]: { ...expected, error: {} }
        };

        const result = reducer(state, action);

        expect(result[action.id]).toEqual(expected);
    });
}

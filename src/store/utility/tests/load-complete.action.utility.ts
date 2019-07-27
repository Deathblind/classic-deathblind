import { Reducer } from "redux";
import {LoadMultipleCompleteAction, ActionPayload} from "../load/action";

/* istanbul ignore next */
export function createLoadCompleteMultipleActionTest(
    reducer: Reducer<any, any>,
    action: ActionPayload<LoadMultipleCompleteAction<any>>
) {
    it("Should create an async state", () => {
        const result = reducer(undefined, action);
        const expected = {
            data: action.payload.data,
            loading: false,
            firstLoad: false,
            error: null
        };

        expect(result[action.payload.id]).toEqual(expected);
    });

    it("Should reset loading", () => {
        const expected = {
            data: action.payload,
            loading: false,
            firstLoad: false,
            error: null
        };

        const state = {
            [action.payload.id]: { ...expected, loading: true }
        };

        const result = reducer(state, action);
        expect(result[action.payload.id]).toEqual(expected);
    });
}

/* istanbul ignore next */
export function createLoadCompleteMultipleActionErrorTest(
    reducer: Reducer<any, any>,
    action: ActionPayload<LoadMultipleCompleteAction<any>>
) {
    it("Should set error", () => {
        const expected = {
            data: null,
            loading: false,
            firstLoad: false,
            error: action.payload.error
        };

        const state = {
            [action.payload.id]: { ...expected, loading: true }
        };

        const result = reducer(state, action);
        expect(result[action.payload.id]).toEqual(expected);
    });
}

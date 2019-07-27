import { AsyncStateMap } from "../async/state";
import { produce } from "immer";

export function loadMap<T>(fixtures: { [id: string]: T }): AsyncStateMap<T> {
    let data: AsyncStateMap<T> = {};

    Object.keys(fixtures).forEach(i => {
        data = produce<AsyncStateMap<T>>(data, draft => ({
            ...draft,
            [i]: {
                data: fixtures[i],
                loading: false,
                firstLoad: false,
                error: undefined
            }
        }));
    });

    return data;
}

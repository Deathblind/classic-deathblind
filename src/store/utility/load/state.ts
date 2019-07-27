import { LoadCompleteAction, ActionPayload } from "./action";
import { AsyncState } from "../async/state";

export const setToLoading = <T>(state: AsyncState<T>): AsyncState<T> => ({
    ...state,
    loading: true,
    error: null
});

export function setToLoadingComplete<T>(
    state: AsyncState<T>,
    { payload }: ActionPayload<LoadCompleteAction<T>>
): AsyncState<T> {
    return {
        ...state,
        data: payload.data,
        loading: false,
        firstLoad: false,
        error: payload.error ? payload.error : null
    };
}

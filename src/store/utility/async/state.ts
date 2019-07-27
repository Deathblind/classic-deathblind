import { ErrorState } from "./error";

export interface AsyncState<T> {
    data: T | null;
    loading: boolean;
    firstLoad: boolean;
    error: ErrorState | null;
}

export interface AsyncStateMap<T> {
    [key: number]: AsyncState<T> | undefined;
}

export const createLoadingAsyncState = <T>(): AsyncState<T> => ({
    data: null,
    loading: true,
    firstLoad: true,
    error: null
});

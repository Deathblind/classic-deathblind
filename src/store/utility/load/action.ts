import { ErrorState } from "../async/error";
import { Action } from "redux";

export interface ActionPayload<T> extends Action {
    payload: T;
}

export interface LoadAction {}

export interface LoadCompleteAction<T> {
    data: T | null;
    error?: ErrorState | null;
}

export interface LoadMultipleAction extends LoadAction {
    id: number;
}

export interface LoadMultipleCompleteAction<T>
    extends LoadMultipleAction,
        LoadCompleteAction<T> {}

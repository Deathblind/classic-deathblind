import {
    LoadMultipleCompleteAction,
    LoadMultipleAction,
    LoadAction,
    LoadCompleteAction,
    ActionPayload
} from "./action";
import { setToLoadingComplete, setToLoading } from "./state";
import {
    createLoadingAsyncState,
    AsyncState,
    AsyncStateMap
} from "../async/state";
import { Reducer, AnyAction } from "redux";
import { produce } from "immer";

type LoadMultipleBundle<EntryType> =
    | LoadMultipleAction
    | LoadMultipleCompleteAction<EntryType>
    | AnyAction;

export function createMultipleLoadReducer<EntryType>(
    loading: string,
    complete: string
): Reducer<AsyncStateMap<EntryType>, any> {
    const initialState = {};

    return (
        state = initialState,
        action: ActionPayload<LoadMultipleBundle<EntryType>>
    ) => {
        if (action.type === loading) {
            return produce(state, (draft: any) => ({
                ...draft,
                [action.payload.id]: setToLoading(
                    draft[action.payload.id] || createLoadingAsyncState()
                )
            }));
        }

        if (action.type === complete) {
            return produce(state, (draft: any) => ({
                ...draft,
                [action.payload.id]: setToLoadingComplete(
                    draft[action.payload.id],
                    action as ActionPayload<
                        LoadMultipleCompleteAction<EntryType>
                    >
                )
            }));
        }

        return state;
    };
}

type LoadBundle<EntryType> =
    | LoadAction
    | LoadCompleteAction<EntryType>
    | AnyAction;

export function createLoadReducer<EntryType>(
    loading: string,
    complete: string,
    initialData?: EntryType
): Reducer<AsyncState<EntryType>, any> {
    const initialState = {
        ...createLoadingAsyncState<EntryType>(),
        data: initialData ? initialData : null
    };

    return (
        state = initialState,
        action: ActionPayload<LoadBundle<EntryType>>
    ) => {
        if (action.type === loading) {
            return setToLoading(state);
        }

        if (action.type === complete) {
            return setToLoadingComplete(state, action as ActionPayload<
                LoadCompleteAction<EntryType>
            >);
        }

        return state;
    };
}

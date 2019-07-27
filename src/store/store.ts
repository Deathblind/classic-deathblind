import { createStore, applyMiddleware } from "redux";
import { rootReducer, RootState, rootEpic } from "./root";
import { createEpicMiddleware } from "redux-observable";
// import {createMiddleware} from "redux-beacon";
// import {eventMap, gAnalytics} from "./analytics";

export const configureStore = (initialState: Partial<RootState> = {}) => {
    const epicMiddleware = createEpicMiddleware();
    // const gaMiddleware = createMiddleware(eventMap, gAnalytics);

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
};

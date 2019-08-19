import { createStore, applyMiddleware } from "redux";
import { rootReducer, RootState, rootEpic } from "./root";
import { createEpicMiddleware } from "redux-observable";
import { createMiddleware } from "redux-beacon";
import { eventMap, gAnalytics } from "./analytics";
import { compose } from "ramda";
import LogRocket from "logrocket";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function | undefined;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function | undefined;
    }
}

export const configureStore = (initialState: Partial<RootState> = {}) => {
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [
        epicMiddleware,
        createMiddleware(eventMap, gAnalytics),
        LogRocket.reduxMiddleware()
    ];

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, initialState, enhancer);

    epicMiddleware.run(rootEpic);

    return store;
};

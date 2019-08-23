import React from "react";
import { render, hydrate } from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { RootState } from "./store/root";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import { Router } from "react-router";
import { history } from "./store/states/history/history";

import Theme from "./theme/theme/index";
import GlobalStyles from "./styles/styles";
import ScrollToTop from "./scroll-to-top";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

const state: Partial<RootState> = { ...window["__STATE__"] };
delete window["__STATE__"];

const store = configureStore(state);

const renderReact = (element, root: HTMLElement) => {
    if (root.innerHTML.trim().length) {
        return hydrate(element, root);
    }

    return render(element, root);
};

LogRocket.init("2ij0ka/deathblind");
setupLogRocketReact(LogRocket);

export const initApplication = App => {
    renderReact(
        <Provider store={store}>
            <Router history={history!}>
                <Theme>
                    <>
                        <GlobalStyles />

                        <ScrollToTop>
                            <App />
                        </ScrollToTop>
                    </>
                </Theme>
            </Router>
        </Provider>,
        document.getElementById("root") as HTMLElement
    );

    if (process.env.NODE_ENV === "production") {
        serviceWorker.register();
    }
};

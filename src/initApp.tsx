import "./global.css";
import React from "react";
import { render, hydrate } from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { RootState } from "./store/root";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import { Router } from "react-router";
import { history } from "./store/states/history/history";

import { IntlProvider } from "react-intl";
import { translations } from "./translations";
import Theme from "./theme/theme/index";
import GlobalStyles from "./styles/styles";

const state: Partial<RootState> = { ...window["__STATE__"] };
delete window["__STATE__"];

const store = configureStore(state);

const renderReact = (element, root: HTMLElement) => {
    if (root.innerHTML.trim().length) {
        return hydrate(element, root);
    }

    return render(element, root);
};

export const initApplication = App => {
    renderReact(
        <Provider store={store}>
            <IntlProvider locale="en" messages={translations}>
                <Router history={history!}>
                    <Theme>
                        <>
                            <GlobalStyles />
                            <App />
                        </>
                    </Theme>
                </Router>
            </IntlProvider>
        </Provider>,
        document.getElementById("root") as HTMLElement
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
};

import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withOptions } from "@storybook/addon-options";
import { withNotes } from "@storybook/addon-notes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../src/theme/theme";
import React from "react";
import StoryRouter from "storybook-react-router";
import GlobalStyles from "../../src/styles/styles";
import { Provider } from "react-redux";
import { configureStore } from "../../src/store/store";

addDecorator(checkA11y);
addDecorator(StoryRouter());
addDecorator(
    withOptions({
        addonPanelInRight: true
    })
);
addDecorator(withNotes);
addDecorator(story => (
    <>
        <GlobalStyles />
        {story()}
    </>
));
addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>
        <>{story()}</>
    </ThemeProvider>
));

const store = configureStore();
addDecorator(story => <Provider store={store}>{story()}</Provider>);

const req = require.context("../../src", true, /.story.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

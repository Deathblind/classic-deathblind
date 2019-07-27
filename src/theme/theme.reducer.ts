import {
    ThemeChangeAction,
    THEME_CHANGE,
} from "./theme.actions";
import { defaultTheme } from "./theme/index";

export const themeReducer = (
    state = defaultTheme,
    action: ThemeChangeAction
) => {
    if (action.type === THEME_CHANGE) {
        const { payload } = action;

        return payload;
    }

    return state;
};
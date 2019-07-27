import { compose } from "ramda";
import { ThemeInterface } from "./util/helpers";

export const getMode = (theme: ThemeInterface) => theme.mode;
export const getTheme = (state: { theme: ThemeInterface }) => state.theme;

export const getThemeMode = compose(
    getMode,
    getTheme
);

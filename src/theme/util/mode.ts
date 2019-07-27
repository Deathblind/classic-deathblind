import styledTheme from "styled-theming";
import { themeFunction } from "./helpers";

export interface ModeValues<T> {
    dark: T;
}

export type ThemeMode = keyof ModeValues<any>;

export interface HasMode {
    mode: ThemeMode;
}

export const createMode = (
    key: keyof HasMode,
    obj: ModeValues<string | themeFunction>
) => styledTheme(key, obj);

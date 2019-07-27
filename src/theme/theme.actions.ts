import { Action } from "redux";
import { ThemeInterface } from "./util/helpers";
import { type } from "../store/utility/action";

export const THEME_CHANGE = type("@@styled/THEME_CHANGE");

export interface ThemeChangeAction extends Action {
    payload: ThemeInterface;
}

export const changeTheme = (theme: ThemeInterface): ThemeChangeAction => ({
    type: THEME_CHANGE,
    payload: theme
});
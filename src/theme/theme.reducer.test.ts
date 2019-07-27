import { themeReducer } from "./theme.reducer";
import {
    changeTheme,
    ThemeChangeAction
} from "./theme.actions";

const theme: any = {
    size: "mobile",
    mode: "light"
};

it("should set the theme", () => {
    const oldState = theme;
    const newState = themeReducer(
        oldState,
        changeTheme({
            ...theme,
            mode: "dark"
        })
    );

    expect(oldState).not.toBe(newState);
});

it("should not set the theme", () => {
    const oldState = theme;
    const newState = themeReducer(oldState, {
        type: "Foobar"
    } as ThemeChangeAction);

    expect(oldState).toBe(newState);
});
import { changeTheme, THEME_CHANGE } from "./theme.actions";
import { ThemeInterface } from "./util/helpers";

it("should return the correct type", () => {
    const theme = { mode: "dark" } as ThemeInterface;
    const result = changeTheme(theme);

    expect(result.type).toEqual(THEME_CHANGE);
});

it("should return the correct payload", () => {
    const theme = { mode: "dark" } as ThemeInterface;
    const result = changeTheme(theme);

    expect(result.payload).toEqual(theme);
});

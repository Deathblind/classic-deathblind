import { ThemeInterface } from "./util/helpers";
import {getThemeMode} from "./theme.selector";
import {
    getTheme,
    getMode,
} from "./theme.selector";

describe("selectors", () => {
    it("should give back the state", () => {
        const result = getTheme({
            theme: { mode: "dark" } as ThemeInterface
        });
        expect(result.mode).toEqual("dark");
    });

    it("should give back the mode", () => {
        const result = getThemeMode({
            theme: { mode: "dark" } as ThemeInterface
        });
        expect(result).toEqual("dark");
    });
});

it("should get the mode", () => {
    const result = getMode({ mode: "dark" } as ThemeInterface);
    expect(result).toEqual("dark");
});

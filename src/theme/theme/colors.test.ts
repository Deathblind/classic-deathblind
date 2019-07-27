import { ThemeInterface } from "../util/helpers";
import {
    primaryBackground,
    primaryForeground
} from "./colors";

const theme = {
    primaryHue: 211,
    secondaryHue: 52
} as ThemeInterface;

describe("primaryBackground", () => {
    it("matches dark snapshot", () => {
        const result = primaryBackground({
            theme: { ...theme, mode: "dark" }
        });
        expect(result).toMatchSnapshot(result);
    });
});

describe("primaryForeground", () => {
    it("matches dark snapshot", () => {
        const result = primaryForeground({
            theme: { ...theme, mode: "dark" }
        });
        expect(result).toMatchSnapshot(result);
    });
});
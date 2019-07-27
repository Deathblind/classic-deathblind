import { ThemeInterface } from "../util/helpers";
import {
    h1FontSize,
    h1LineHeight,
    h2FontSize,
    h2LineHeight,
    h3FontSize,
    h3LineHeight,
    h4FontSize,
    h4LineHeight,
    h5FontSize,
    h5LineHeight,
    h6FontSize,
    h6LineHeight,
    bodyFontSize,
    bodyLineHeight
} from "./font-sizes";

const theme = {} as ThemeInterface;

describe("h1FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h1FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h1FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h1FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h1LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h1LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h1LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h1LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h2FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h2FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h2FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h2FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h2LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h2LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h2LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h2LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h3FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h3FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h3FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h3FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h3LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h3LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h3LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h3LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h4FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h4FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h4FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h4FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h4LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h4LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h4LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h4LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h5FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h5FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h5FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h5FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h5LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h5LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h5LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h5LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h6FontSize", () => {
    it("matches mobile snapshot", () => {
        const result = h6FontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h6FontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h6FontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("h6LineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = h6LineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = h6LineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = h6LineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("bodyFontSize", () => {
    it("matches mobile snapshot", () => {
        const result = bodyFontSize({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = bodyFontSize({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = bodyFontSize({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

describe("bodyLineHeight", () => {
    it("matches mobile snapshot", () => {
        const result = bodyLineHeight({ theme: { ...theme, size: "mobile" } });
        expect(result).toMatchSnapshot();
    });

    it("matches tablet snapshot", () => {
        const result = bodyLineHeight({ theme: { ...theme, size: "tablet" } });
        expect(result).toMatchSnapshot();
    });

    it("matches desktop snapshot", () => {
        const result = bodyLineHeight({ theme: { ...theme, size: "desktop" } });
        expect(result).toMatchSnapshot();
    });
});

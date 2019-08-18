import { createGlobalStyle } from "../theme/util/helpers";
import { bodyLineHeight, bodyFontSize } from "../theme/theme/font-sizes";
import { primaryForeground } from "../theme/theme/colors";
import { bodyFont } from "../theme/theme/font-families";
import { h1, h2, h3, h4, h5, h6 } from "../ui/util/heading/heading";

export const Typography = createGlobalStyle`
    body {
        font-family: ${bodyFont};
        font-size: ${bodyFontSize};
        line-height: ${bodyLineHeight};
        color: ${primaryForeground};

        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        ${h1}
    }

    h2 {
        ${h2}
    }

    h3 {
        ${h3}
    }

    h4 {
        ${h4}
    }

    h5 {
        ${h5}
    }

    h6 {
        ${h6}
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
    }

    svg {
        fill: currentColor;
    }
`;

export { Typography as default };

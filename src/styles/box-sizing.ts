import { createGlobalStyle } from "../theme/util/helpers";

export const BoxSizing = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }

    *::before,
    *::after {
        box-sizing: inherit;
    }
`;

export { BoxSizing as default };

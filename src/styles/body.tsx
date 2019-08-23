import { createGlobalStyle } from "../theme/util/helpers";
import { pageBackground } from "../theme/theme/colors";

export const Body = createGlobalStyle`
    html {
        overflow-y: scroll;
    }

    body {
        position: relative;
        background-color: ${pageBackground};
    }
`;

export { Body as default };

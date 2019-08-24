import { css } from "../../theme/util/helpers";
import { defaultMargin } from "../../theme/theme/sizes";

export const blockStyling = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        grid-column: 1/-1;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    ul,
    ol {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding-top: 1.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    ul,
    ol,
    figure {
        margin-bottom: ${defaultMargin};
    }
`;

export default blockStyling;

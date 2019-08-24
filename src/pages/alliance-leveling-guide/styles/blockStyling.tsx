import { css } from "../../../theme/util/helpers";

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
`;

export default blockStyling;

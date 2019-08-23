import { createQuery } from "../util/responsive";
import { css } from "../util/helpers";

export const DESKTOP = 1100;
export const TABLET = 768;
export const MOBILE = 0;

export const mobileOnly = createQuery(MOBILE, TABLET - 1);
export const tabletOnly = createQuery(TABLET, DESKTOP - 1);

export const mobile = createQuery(MOBILE);
export const tablet = createQuery(TABLET);
export const desktop = createQuery(DESKTOP);

export const hideOnMobile = css`
    ${mobileOnly`
        display: none;
    `};
`;

export const hideOnTablet = css`
    ${tabletOnly`
        display: none;
    `};
`;

export const hideOnDesktop = css`
    ${desktop`
        display: none;
    `};
`;

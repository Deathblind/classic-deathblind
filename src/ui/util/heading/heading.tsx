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
    h6LineHeight
} from "../../../theme/theme/font-sizes";
import { bodyFont } from "../../../theme/theme/font-families";
import { css } from "../../../theme/util/helpers";
import { primaryHeadingForeground } from "../../../theme/theme/colors";

export const h1 = css`
    font-size: ${h1FontSize};
    line-height: ${h1LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

export const h2 = css`
    font-size: ${h2FontSize};
    line-height: ${h2LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

export const h3 = css`
    font-size: ${h3FontSize};
    line-height: ${h3LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

export const h4 = css`
    font-size: ${h4FontSize};
    line-height: ${h4LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

export const h5 = css`
    font-size: ${h5FontSize};
    line-height: ${h5LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

export const h6 = css`
    font-size: ${h6FontSize};
    line-height: ${h6LineHeight};
    font-family: ${bodyFont};
    font-weight: 600;
    color: ${primaryHeadingForeground};
`;

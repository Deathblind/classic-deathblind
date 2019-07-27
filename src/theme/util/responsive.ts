import { css, ThemeInterface } from "./helpers";
import { ThemedCssFunction } from "styled-components";

export const createQuery = (
    minSize: number,
    maxSize?: number
): ThemedCssFunction<ThemeInterface> => (strings, ...interpolations) => {
    if (maxSize) {
        return css`
            @media (min-width: ${minSize / 16}em) and (max-width: ${maxSize /
                    16}em) {
                ${css(strings, ...interpolations)};
            }
        `;
    }

    return css`
        @media (min-width: ${minSize / 16}em) {
            ${css(strings, ...interpolations)};
        }
    `;
};

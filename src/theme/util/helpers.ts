import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { HasMode } from "./mode";

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
    createGlobalStyle
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export interface ThemeInterface extends HasMode {
    primaryHue: number;
    secondaryHue: number;
    gridSpan: number;

    buttonHues: {
        cta: number;
    };
}

export { css, styled, keyframes, ThemeProvider, createGlobalStyle };

export interface ThemeProps {
    theme: ThemeInterface;
}

export type themeFunction = (props: ThemeProps) => string;

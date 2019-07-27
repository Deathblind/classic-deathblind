import {ThemeProps} from "../util/helpers";

// Padding
export const defaultPadding = ({theme}: ThemeProps) => `${theme.gridSpan * 3}rem`;
export const bigPadding = ({theme}: ThemeProps) => `${theme.gridSpan * 5}rem`;
export const smallPadding = ({theme}: ThemeProps) => `${theme.gridSpan * 2}rem`;
export const tinyPadding = ({theme}: ThemeProps) => `${theme.gridSpan}rem`;

// Margin
export const defaultMargin = ({theme}: ThemeProps) => `${theme.gridSpan * 4}rem`;

// Border Radius
export const defaultBorderRadius = ({theme}: ThemeProps) => `4px`;

// Width
export const containerMaxWidth = ({theme}: ThemeProps) => `${theme.gridSpan * 240}rem`;
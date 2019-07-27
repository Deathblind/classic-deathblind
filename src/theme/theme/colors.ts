import {createMode} from "../util/mode";

export const primaryForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 27%, 88%)`
});

export const primaryBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 0%, 16%)`
});

export const divider = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 0%, 16%)`
});

export const pageBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 10%, 20%)`
});

// Buttons

export const buttonCtaBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.buttonHues.cta}, 40%, 56%)`
});

export const buttonCtaForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.buttonHues.cta}, 0%, 80%)`
});


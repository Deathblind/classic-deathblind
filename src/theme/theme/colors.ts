import { createMode } from "../util/mode";

export const primaryForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 15%, 69%)`
});

export const primarySaturatedForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 16%, 60%)`
});

export const primaryHeadingForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 6%, 94%)`
});

export const primaryBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 23%, 23%)`
});

export const primarySaturatedBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 19%, 28%)`
});

export const primaryAccentBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 74%, 67%)`
});

export const divider = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 23%, 23%)`
});

export const pageBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.primaryHue}, 26%, 14%)`
});

// Buttons

export const buttonCtaBackground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.buttonHues.cta}, 40%, 56%)`
});

export const buttonCtaForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.buttonHues.cta}, 0%, 80%)`
});

// Wowhead

export const questForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.wowheadHues.quest}, 100%, 50%)`
});

export const npcForeground = createMode("mode", {
    dark: ({ theme }) => `hsl(${theme.wowheadHues.npc}, 75%, 50%)`
});

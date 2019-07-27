import "@storybook/react";

declare module "@storybook/react" {
    interface NotesAddOnConfig {
        notes: string | { markdown: string };
    }

    interface Story {
        add(
            storyName: string,
            callback: RenderFunction,
            config: NotesAddOnConfig
        ): this;
    }
}

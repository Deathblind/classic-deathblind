import { storiesOf } from "@storybook/react";
import React from "react";

export const IconStories = storiesOf("Icon", module)
    .addDecorator(story => <div style={{maxWidth: "100px"}}>
        {story()}
    </div>);

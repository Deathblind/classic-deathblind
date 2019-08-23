import React, { SFC } from "react";
import Normalize from "./normalize";
import BoxSizing from "./box-sizing";
import Body from "./body";
import Typography from "./typography";
import Helmet from "react-helmet";

export const GlobalStyles: SFC = () => (
    <>
        <Helmet>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Helmet>

        <Normalize />
        <BoxSizing />
        <Typography />
        <Body />
    </>
);

export { GlobalStyles as default };

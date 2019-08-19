import React, { SFC } from "react";
import Typography from "./typography";
import Body from "./body";
import BoxSizing from "./box-sizing";
import { GoogleFont, FontWeight } from "./font";
import Helmet from "react-helmet";

export const GlobalStyles: SFC = () => (
    <>
        <Helmet>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Helmet>

        <GoogleFont fonts={[{ family: "Nanum Brush Script" }]} />
        <BoxSizing />
        <Typography />
        <Body />
    </>
);

export { GlobalStyles as default };

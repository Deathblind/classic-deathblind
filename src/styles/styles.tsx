import React, { SFC } from "react";
import Typography from "./typography";
import Body from "./body";
import BoxSizing from "./box-sizing";
import {GoogleFont, FontWeight} from "./font";

export const GlobalStyles: SFC = () => (
    <>
        <GoogleFont fonts={[
            {family: "Nanum Brush Script"},
            {family: "Karla", weights: [FontWeight.Bold, FontWeight.BoldItalics]}
        ]} />
        <BoxSizing />
        <Typography />
        <Body />
    </>
);

export {GlobalStyles as default};
import React, {SFC, memo} from "react";
import {Helmet} from "react-helmet";

export enum FontSubset {
    Cyrillic = "cyrillic",
    CyrillicExtended = "cyrillic-ext",
    Greek = "greek",
    GreekExtended = "greek-ext",
    Viatnamese = "viatnamese",
    LatinExtended = "latin-ext"
}

export enum FontWeight {
    Normal = 400,
    NormalItalics = "400i",
    Medium = 500,
    MediumItalics = "500i",
    SemiBold = 600,
    SemiBoldItalics = "600i",
    Bold = 700,
    BoldItalics = "700i",
    ExtraBold = 800,
    ExtraBoldItalics = "800i"
}

interface Font {
    family: string;
    weights?: FontWeight[] | null;
    subsets?: FontSubset[] | null;
}

export interface GoogleFontProps {
    fonts: Font[];
}

export const GoogleFont: SFC<GoogleFontProps> = memo(({fonts}) => {
    return <Helmet>
        {fonts.map(font => {
            const family = font.family.replace(/ +/g, "+");
            const weights = font.weights ? font.weights.join(",") : null;
            const subsets = font.subsets ? font.subsets.join(",") : null;

            const weightString = weights
                ? `:${weights}`
                : "";
            const subsetString = subsets
                ? `&amp;${subsets}`
                : "";

            return <link
                key={font.family}
                href={`https://fonts.googleapis.com/css?family=${family}${weightString}${subsetString}`}
                rel="stylesheet"
            />;
        })}
    </Helmet>;
});

export {GoogleFont as default};
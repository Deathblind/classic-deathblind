import { css } from "../../../theme/util/helpers";
import {
    defaultPadding,
    defaultBorderRadius,
    defaultMargin
} from "../../../theme/theme/sizes";
import {
    primarySaturatedBackground,
    primaryAccentBackground
} from "../../../theme/theme/colors";
import afloatBoxShadow from "../../../ui/util/afloat-box-shadow/afloat-box-shadow";
import { h4FontSize } from "../../../theme/theme/font-sizes";

export const listStyling = css`
    ul,
    ol {
        padding-left: 40px;
    }

    ul {
        list-style: disc;
    }

    ol {
        display: grid;
        grid-row-gap: ${defaultPadding};
        counter-reset: li;
        padding: 0;
        list-style: none;

        & > li {
            display: grid;
            grid-template-columns: min-content auto;
            grid-column-gap: ${defaultPadding};
            align-items: center;
            position: relative;

            padding: ${defaultPadding};
            background-color: ${primarySaturatedBackground};
            border-radius: ${defaultBorderRadius};
            ${afloatBoxShadow};

            &:before {
                content: counter(li);
                counter-increment: li;
                position: absolute;
                top: -16px;
                left: -16px;
                box-sizing: border-box;
                width: 32px;
                color: ${primaryAccentBackground};
                font-weight: bold;
                font-size: ${h4FontSize};
                text-align: center;
                text-shadow: 1px 1px #000;
            }
        }
    }

    ol,
    ul {
        ol,
        ul {
            grid-column: 1/-1;
            margin-bottom: 0;
            margin-top: ${defaultMargin};

            li {
                background-color: transparent;
            }

            label {
                display: none;
            }
        }
    }
`;

export default listStyling;

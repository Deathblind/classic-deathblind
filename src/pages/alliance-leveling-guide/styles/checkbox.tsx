import { css } from "../../../theme/util/helpers";
import {
    pageBackground,
    primaryAccentBackground
} from "../../../theme/theme/colors";
import { defaultBorderRadius } from "../../../theme/theme/sizes";
import Checkmark from "../../../icons/check.svg";

export const checkBoxStyling = css`
    label {
        position: relative;
        width: 24px;
        height: 24px;
        background-color: ${pageBackground};
        border-radius: ${defaultBorderRadius};
        cursor: pointer;
    }

    label input {
        visibility: hidden;
        opacity: 0;
    }

    label div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        border-radius: ${defaultBorderRadius};
        background-color: ${primaryAccentBackground};
        background-image: url(${Checkmark});
        opacity: 0;
    }

    label input:checked + div {
        opacity: 1;
    }
`;

export default checkBoxStyling;

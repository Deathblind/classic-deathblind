import { css } from "../../../theme/util/helpers";
import {
    defaultPadding,
    defaultBorderRadius
} from "../../../theme/theme/sizes";
import afloatBoxShadow from "../../../ui/util/afloat-box-shadow/afloat-box-shadow";

export const imageStyling = css`
    figure > img {
        max-width: 100%;
        max-height: 90vh;
        position: sticky;
        top: ${defaultPadding};
        ${afloatBoxShadow};
        border-radius: ${defaultBorderRadius};
    }

    figure {
        justify-self: flex-end;
    }
`;

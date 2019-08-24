import { css } from "../../../theme/util/helpers";
import {
    defaultPadding,
    defaultBorderRadius
} from "../../../theme/theme/sizes";
import afloatBoxShadow from "../../../ui/util/afloat-box-shadow/afloat-box-shadow";
import { tablet } from "../../../theme/theme/responsive";

export const imageStyling = css`
    img {
        vertical-align: top;
    }

    figure > img {
        width: 100%;
        ${afloatBoxShadow};
        border-radius: ${defaultBorderRadius};
    }

    ${tablet`
        figure > img {
            max-width: 100%;
            max-height: 90vh;
            position: sticky;
            top: ${defaultPadding};
        }

        figure {
            justify-self: flex-end;
        }
    `}
`;

export default imageStyling;

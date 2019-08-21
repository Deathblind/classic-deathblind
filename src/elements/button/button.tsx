import { styled } from "../../theme/util/helpers";
import { defaultBorderRadius, smallPadding } from "../../theme/theme/sizes";
import { smallBodyFontSize } from "../../theme/theme/font-sizes";

export const Button = styled.button`
    display: inline-block;
    border-radius: ${defaultBorderRadius};
    font-size: ${smallBodyFontSize};
    padding: ${smallPadding};
    text-align: center;

    &[disabled] {
        cursor: not-allowed;
    }
`;

Button.defaultProps = {
    type: "button"
};

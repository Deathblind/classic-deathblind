import React, { SFC, memo } from "react";
import { styled } from "../../theme/util/helpers";
import { primarySaturatedForeground } from "../../theme/theme/colors";
import { insanePadding } from "../../theme/theme/sizes";

export const StyledFooter = styled.footer`
    text-align: center;
    color: ${primarySaturatedForeground};
    padding: ${insanePadding};
`;

export const Footer: SFC = memo(props => (
    <StyledFooter>
        <small>&copy; 2019 Ryan van Buiten</small>
    </StyledFooter>
));

export default Footer;

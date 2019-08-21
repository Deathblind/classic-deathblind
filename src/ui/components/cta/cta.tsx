import React, { SFC, memo } from "react";
import { styled } from "../../../theme/util/helpers";
import { Button } from "../../../elements/button/button";
import {
    buttonCtaBackground,
    buttonCtaForeground,
    buttonCtaDisabledBackground
} from "../../../theme/theme/colors";
import { insanePadding } from "../../../theme/theme/sizes";
import highlightBoxShadow from "../../util/highlight-box-shadow/highlight-box-shadow";
import { Link } from "react-router-dom";

export const StyledCta = styled<any>(Button.withComponent(Link))`
    text-decoration: none;
    background-color: ${buttonCtaBackground};
    color: ${buttonCtaForeground};
    padding-left: ${insanePadding};
    padding-right: ${insanePadding};
    ${highlightBoxShadow};

    &[disabled] {
        pointer-events: none;
        background-color: ${buttonCtaDisabledBackground};
    }
`;

export const Cta: SFC<{ to: string; disabled?: boolean }> = memo(
    ({ children, to, disabled }) => (
        <StyledCta to={to} disabled={disabled}>
            {children}
        </StyledCta>
    )
);

export default Cta;

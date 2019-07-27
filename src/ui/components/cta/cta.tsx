import React, {SFC, memo} from "react";
import {styled} from "../../../theme/util/helpers";
import {Button} from "../../../elements/button/button";
import {buttonCtaBackground, buttonCtaForeground} from "../../../theme/theme/colors";
import {bigPadding} from "../../../theme/theme/sizes";
import highlightBoxShadow from "../../util/highlight-box-shadow/highlight-box-shadow";

export const StyledCta = styled(Button.withComponent("a"))`
    text-decoration: none;
    background-color: ${buttonCtaBackground};
    color: ${buttonCtaForeground};
    padding-left: ${bigPadding};
    padding-right: ${bigPadding};
    ${highlightBoxShadow};
`;

export const Cta: SFC<{href: string}> = memo(({ children, href }) => <StyledCta
    href={href}
    target={"_blank"}
>{ children }</StyledCta>);

export default Cta;
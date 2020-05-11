import React, { SFC, memo } from "react";
import { styled } from "../../theme/util/helpers";
import { NavLink } from "react-router-dom";
import {
    defaultPadding,
    defaultMargin,
    tinyPadding
} from "../../theme/theme/sizes";
import {
    divider,
    primarySaturatedForeground,
    primaryAccentBackground,
    primaryHeadingForeground
} from "../../theme/theme/colors";
import { ReactComponent as ShoppingCart } from "../../icons/cart.svg";
import Logo from "../../icons/logo.png";
import { h6FontSize } from "../../theme/theme/font-sizes";
import Image from "../../elements/image/image";
import { tablet } from "../../theme/theme/responsive";

export const StyledNavigation = styled.nav`
    margin-left: ${defaultPadding};
    margin-right: ${defaultPadding};
    margin-bottom: ${defaultMargin};
    padding-bottom: ${defaultPadding};
    padding-top: ${defaultPadding};
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: ${defaultPadding};
    border-bottom: 2px solid ${divider};
    font-size: ${h6FontSize};

    ${tablet`
        grid-template-columns: max-content max-content max-content;
    `}
`;

export const Item = styled(NavLink)`
    color: ${primarySaturatedForeground};
    text-decoration: none;
    font-weight: 500;

    &.active {
        color: ${primaryHeadingForeground};
        font-weight: 700;
    }
`;

export const HomeItem = styled.a`
    display: grid;
    grid-template-columns: 46px max-content;
    grid-column-gap: ${tinyPadding};
    align-items: center;
`;

export const MerchItem = styled.a`
    color: ${primaryAccentBackground};
    text-decoration: none;
    display: grid;
    grid-template-columns: 24px max-content;
    grid-column-gap: ${tinyPadding};
    align-items: center;
    justify-self: center;
    grid-column: -1/1;

    ${tablet`
        border-left: 2px solid ${divider};
        padding-left: ${defaultPadding};
        grid-column: initial;
    `}
`;

Item.defaultProps = {
    activeClassName: "active"
};

export const Navigation: SFC = memo(props => (
    <StyledNavigation>
        <HomeItem href="https://deathblind.com" exact>
            <Image src={Logo} alt="Logo" title="Deathblind Logo" />
            Home
        </HomeItem>

        <Item to="/alliance-leveling-guide">Leveling Guide</Item>

        <MerchItem
            href="https://www.moteefe.com/store/hydrastore"
            target="_blank"
        >
            <ShoppingCart />
            Buy Merchandise!
        </MerchItem>
    </StyledNavigation>
));

export default Navigation;

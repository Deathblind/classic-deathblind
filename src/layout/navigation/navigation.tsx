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

export const StyledNavigation = styled.nav`
    margin-left: ${defaultPadding};
    margin-right: ${defaultPadding};
    margin-bottom: ${defaultMargin};
    padding-bottom: ${defaultPadding};
    padding-top: ${defaultPadding};
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content max-content max-content;
    align-items: center;
    grid-column-gap: ${defaultPadding};
    border-bottom: 2px solid ${divider};
    font-size: ${h6FontSize};
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

export const HomeItem = styled(Item)`
    display: grid;
    grid-template-columns: 46px max-content;
    grid-column-gap: ${tinyPadding};
    align-items: center;
`;

export const MerchItem = styled.a`
    color: ${primaryAccentBackground};
    text-decoration: none;
    font-weight: 400;
    display: grid;
    grid-template-columns: 24px max-content;
    grid-column-gap: ${tinyPadding};
    align-items: center;
    padding-left: ${defaultPadding};
    border-left: 2px solid ${divider};
`;

Item.defaultProps = {
    activeClassName: "active"
};

export const Navigation: SFC = memo(props => (
    <StyledNavigation>
        <HomeItem to="/" exact>
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

import React, {SFC, memo} from "react";
import {styled} from "../../theme/util/helpers";
import {NavLink} from "react-router-dom";

export const StyledNavigation = styled.nav``;

export const Item = styled(NavLink)`

    &.active {
    }
`;

Item.defaultProps = {
    activeClassName: "active"
};

export const Navigation: SFC = memo(props => <StyledNavigation>

</StyledNavigation>);

export default Navigation;
import React, {SFC, memo} from "react";
import {styled, ThemeProps} from "../../theme/util/helpers";
import coverParent from "../../ui/util/cover-parent/cover-parent";
import useSize from "../../hooks/size/size";

export const headerSize = ({ theme }: ThemeProps) => `calc(25vw)`;

export const StyledHeader = styled.header`
    position: relative;
    height: ${headerSize};
`;

export const StyledHeroImage = styled.div<{ image: string }>`
    ${coverParent}
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    pointer-events: none;

    &::after {
        content: "";
        ${coverParent}
        background-color: rgba(0, 0, 0, 0.45);
        pointer-events: none;
        z-index: 0;
    }
`;

export const StyledAboveHeroImage = styled.div`
    position: relative;
`;

export const OverlappingHeader: SFC = memo(({ children }) => {
    const [sized, {height}] = useSize(
        () => <div>
            { children }
        </div>
    );

    return <div style={{marginTop: `${-height/3}px`}}>
        { sized }
    </div>;
});

export const Header: SFC = memo(({ children }) => <StyledHeader>
    <StyledHeroImage
        image={"http://www.deathblind.com/wp-content/uploads/2016/11/wallpaper-2850123.jpg"}
    />

    <StyledAboveHeroImage>
        {children}
    </StyledAboveHeroImage>
</StyledHeader>);

export default Header;
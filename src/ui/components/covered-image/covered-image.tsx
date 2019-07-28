import React, { SFC, memo, HTMLProps } from "react";
import { bigBorderRadius } from "../../../theme/theme/sizes";
import { styled } from "../../../theme/util/helpers";
import Image, { LazyAccessibleImage } from "../../../elements/image/image";
import afloatBoxShadow from "../../util/afloat-box-shadow/afloat-box-shadow";

export const StyledCoveredImage = styled.div`
    position: relative;
    background-color: #1f252c;
    background-size: cover;
    border-radius: ${bigBorderRadius};
    overflow: hidden;
    ${afloatBoxShadow}
`;

export const StyledCoveredImageOverlay = styled.div`
    border-radius: ${bigBorderRadius};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(
        rgba(38, 42, 53, 0.247059) 0%,
        rgba(38, 42, 53, 0.901961) 120%
    );
    z-index: 2;
`;

export const StyledImage = styled(Image)`
    position: relative;
    z-index: 1;
    width: 100%;
`;

export const CoveredImage: SFC<
    LazyAccessibleImage & HTMLProps<HTMLImageElement>
> = memo(({ loading, src, title, alt }) => (
    <StyledCoveredImage>
        <StyledCoveredImageOverlay />

        <StyledImage loading={loading} src={src} title={title} alt={alt} />
    </StyledCoveredImage>
));

export default CoveredImage;

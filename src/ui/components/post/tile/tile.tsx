import React, { SFC, memo } from "react";
import { styled } from "../../../../theme/util/helpers";
import {
    smallPadding,
    tinyPadding,
    bigBorderRadius
} from "../../../../theme/theme/sizes";
import afloatBoxShadow from "../../../util/afloat-box-shadow/afloat-box-shadow";
import { h4, h5 } from "../../../util/heading/heading";

export interface TileProps {
    image: string;

    // content
    title: string;

    // meta
    author: string;
    category: string;
    tags: string[];
}

export const StyledTile = styled.div<Pick<TileProps, "image">>`
    position: relative;
    background-color: #1f252c;
    background-size: cover;
    background-image: url(${props => props.image});
    border-radius: ${bigBorderRadius};
    height: 350px;
    ${afloatBoxShadow}
`;

export const StyledContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: ${tinyPadding} ${smallPadding};
`;

export const StyledTitle = styled.div`
    ${h4}
`;

export const StyledAuthor = styled.div`
    ${h5}
`;

export const StyledTileOverlay = styled.div`
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
`;

export const Tile: SFC<TileProps> = memo(({ image, title, author }) => (
    <StyledTile image={image}>
        <StyledTileOverlay />

        <StyledContent>
            <StyledTitle
                dangerouslySetInnerHTML={{ __html: title }}
            ></StyledTitle>
            <StyledAuthor>By {author}</StyledAuthor>
        </StyledContent>
    </StyledTile>
));

export default Tile;

import { styled } from "../../../../theme/util/helpers";
import React, { memo, SFC } from "react";
import { defaultPadding } from "../../../../theme/theme/sizes";
import CoveredImage from "../../covered-image/covered-image";
import { h3, h5 } from "../../../util/heading/heading";
import { smallBodyFontSize } from "../../../../theme/theme/font-sizes";
import { primarySaturatedForeground } from "../../../../theme/theme/colors";

export interface FeaturedProps {
    image: string;
    imageAlt: string;

    // content
    title: string;
    excerp: string;

    // meta
    author: string;
    category: string;
    tags: string[];
}

export const StyledFeatured = styled.div<FeaturedProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${defaultPadding};
    align-items: center;
`;

export const StyledTitle = styled.div`
    ${h3}
    text-transform: capitalize;
`;

export const StyledAuthor = styled.div`
    ${h5}
    color: ${primarySaturatedForeground};
`;

export const StyledExcerp = styled.p`
    font-size: ${smallBodyFontSize};
`;

export const Featured: SFC<FeaturedProps> = memo(props => (
    <StyledFeatured {...props}>
        <CoveredImage
            src={props.image}
            alt={props.imageAlt}
            title={props.title}
        />

        <div>
            <StyledTitle
                role="heading"
                dangerouslySetInnerHTML={{ __html: props.title }}
            ></StyledTitle>
            <StyledAuthor>by {props.author}</StyledAuthor>
            <StyledExcerp
                dangerouslySetInnerHTML={{ __html: props.excerp }}
            ></StyledExcerp>
        </div>
    </StyledFeatured>
));

export default Featured;

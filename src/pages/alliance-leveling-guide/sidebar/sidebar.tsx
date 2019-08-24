import React, { SFC, memo } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../../wordpress/posts/posts.selector";
import { RootState } from "../../../store/root";
import { styled } from "../../../theme/util/helpers";
import {
    defaultPadding,
    defaultBorderRadius,
    tinyPadding
} from "../../../theme/theme/sizes";
import {
    primarySaturatedBackground,
    primaryHeadingForeground,
    primaryForeground
} from "../../../theme/theme/colors";
import { NavLink } from "react-router-dom";
import { decodeHTMLEntities } from "../../../util/decode-html-entities";
import { isIntroduction } from "../../../wordpress/posts/posts.filter";

export const StyledSidebar = styled.aside`
    padding: ${defaultPadding};
    background-color: ${primarySaturatedBackground};
    border-radius: ${defaultBorderRadius};
    display: grid;
    grid-row-gap: ${tinyPadding};
`;

export const StyledLink = styled(NavLink)`
    color: ${primaryForeground};
    text-decoration: none;

    &.active {
        color: ${primaryHeadingForeground};
        font-weight: 600;
    }
`;

export interface SidebarItem {
    title: string;
    postId: number;
}

export interface SidebarProps {
    items: SidebarItem[];
}

export const Sidebar: SFC<SidebarProps> = memo(({ items }) => {
    return (
        <StyledSidebar>
            {items.map(({ postId, title }) => (
                <StyledLink
                    key={postId}
                    to={`/alliance-leveling-guide/${
                        isIntroduction(postId) ? "" : postId
                    }`}
                    exact
                >
                    {title}
                </StyledLink>
            ))}
        </StyledSidebar>
    );
});

const mapStateToProps = (state: RootState): SidebarProps => {
    const posts = getPosts(state);

    return {
        items: posts.data
            ? posts.data.map(post => ({
                  title: decodeHTMLEntities(post.title.rendered),
                  postId: +post.id
              }))
            : []
    };
};

export default connect(mapStateToProps)(Sidebar);

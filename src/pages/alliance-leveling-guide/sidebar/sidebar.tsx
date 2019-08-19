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
import { sortPostsById } from "../../../wordpress/posts/posts.sort";

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
                    to={`/alliance-leveling-guide/${postId}`}
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
            ? sortPostsById(posts.data)
                  .filter(({ id }) => id !== 719)
                  .map(post => ({
                      title: post.title.rendered,
                      postId: +post.id
                  }))
            : []
    };
};

export default connect(mapStateToProps)(Sidebar);

import React, { SFC, memo } from "react";
import Tile from "../../../ui/components/post/tile/tile";
import { connect } from "react-redux";
import { getPosts } from "../../../wordpress/posts/posts.selector";
import { RootState } from "../../../store/root";
import { styled } from "../../../theme/util/helpers";

export const StyledSidebar = styled.aside``;

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
                <div key={postId}>{title}</div>
            ))}
        </StyledSidebar>
    );
});

const mapStateToProps = (state: RootState): SidebarProps => {
    const posts = getPosts(state);

    return {
        items: posts.data
            ? posts.data.map(post => ({
                  title: post.title.rendered,
                  postId: +post.id
              }))
            : []
    };
};

export default connect(mapStateToProps)(Sidebar);

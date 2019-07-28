import React, { SFC, memo } from "react";
import { styled } from "../../../theme/util/helpers";
import { smallPadding, defaultPadding } from "../../../theme/theme/sizes";
import {
    Featured,
    FeaturedProps
} from "../../../ui/components/post/featured/featured";
import Tile from "../../../ui/components/post/tile/tile";
import { connect } from "react-redux";
import { getPostById } from "../../../wordpress/posts/posts.selector";
import { getAuthorById } from "../../../wordpress/authors/authors.selector";
import { RootState } from "../../../store/root";
import { TileProps } from "../../../ui/components/post/tile/tile";
import { BlockLink } from "../../../elements/link/link";

export const StyledLatestPosts = styled.div`
    display: grid;
    grid-row-gap: ${defaultPadding};
    justify-items: center;
    grid-template-columns: 1fr;
`;

export const StyledPosts = styled.div`
    width: 100%;
    display: grid;
    grid-row-gap: ${defaultPadding};
    justify-items: center;
    grid-template-columns: 1fr;
`;

export const StyledLatestPostGrid = styled.div`
    width: 100%;
    display: grid;
    grid-column-gap: ${smallPadding};
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`;

export interface ConnectedToPostProps {
    postId: number;
}

const mapStateToFeaturedProps = (
    state: RootState,
    ownProps: ConnectedToPostProps
): FeaturedProps => {
    const post = getPostById(ownProps.postId)(state);
    const author = post && getAuthorById(post.author)(state);

    return {
        image:
            "http://www.deathblind.com/wp-content/uploads/2017/06/WorldOfWarcraft_art36_1.jpg",
        imageAlt: "",
        title: post ? post.title.rendered : "",
        excerp: post ? post.excerpt.rendered : "",
        author: author ? author.name : "",
        tags: [],
        category: ""
    };
};

export const ConnectedFeatured = connect(mapStateToFeaturedProps)(Featured);

export const StyledLatestPostHightlight = styled(ConnectedFeatured)`
    max-width: ${({ theme }) => `${theme.gridSpan * 200}em`};
    width: 100%;
`;

const mapStateToTileProps = (
    state: RootState,
    ownProps: ConnectedToPostProps
): TileProps => {
    const post = getPostById(ownProps.postId)(state);
    const author = post && getAuthorById(post.author)(state);

    return {
        image:
            "http://www.deathblind.com/wp-content/uploads/2018/11/Comp-1_00000.png",
        title: post ? post.title.rendered : "",
        author: author ? author.name : "",
        tags: [],
        category: ""
    };
};

export const ConnectedTile = connect(mapStateToTileProps)(Tile);

export interface LatestPostsProps {
    posts: number[];
}

export const LatestPosts: SFC<LatestPostsProps> = memo(({ posts }) => {
    const [latestPost, ...others] = posts;

    return (
        <StyledLatestPosts>
            <h2>Latest Posts</h2>

            {posts.length ? (
                <StyledPosts>
                    {latestPost && (
                        <BlockLink to={`/post/${latestPost}`}>
                            <StyledLatestPostHightlight postId={latestPost} />
                        </BlockLink>
                    )}

                    {others.length ? (
                        <StyledLatestPostGrid>
                            {others.map(post => (
                                <BlockLink to={`/post/${post}`} key={post}>
                                    <ConnectedTile postId={post} />
                                </BlockLink>
                            ))}
                        </StyledLatestPostGrid>
                    ) : null}
                </StyledPosts>
            ) : null}
        </StyledLatestPosts>
    );
});

export default LatestPosts;

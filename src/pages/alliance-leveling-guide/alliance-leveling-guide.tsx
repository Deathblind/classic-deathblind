import React, { memo, SFC, useEffect, useState } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/root";
import { defaultPadding, bigPadding } from "../../theme/theme/sizes";
import { styled } from "../../theme/util/helpers";
import Container from "../../ui/components/container/container";
import { decodeHTMLEntities } from "../../util/decode-html-entities";
import { loadPosts } from "../../wordpress/posts/posts.action";
import {
    getPostById,
    getPostsAsIds
} from "../../wordpress/posts/posts.selector";
import Sidebar from "./sidebar/sidebar";
import QuestAvailable from "../../icons/quest-available.png";
import QuestComplete from "../../icons/quest-complete.png";
import { listStyling } from "./styles/list";
import { imageStyling } from "./styles/image";
import { wowStyling } from "./styles/wow";
import { checkBoxStyling } from "./styles/checkbox";
import { blockStyling } from "./styles/block";
import { quoteStyling } from "./styles/quote";
import Cta from "../../ui/components/cta/cta";

declare global {
    interface Window {
        $WowheadPower:
            | {
                  refreshLinks: Function;
              }
            | undefined;
    }
}

export const StyledPostContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${defaultPadding};
    line-height: 1.5;

    ${blockStyling}
    ${listStyling}
    ${imageStyling}
    ${quoteStyling}
    ${checkBoxStyling}
    ${wowStyling}
`;

export const StyledAllianceLevelingGuide = styled(Container)`
    display: grid;
    grid-template-areas:
        ". title"
        "sidebar post";
    grid-template-columns: 250px 1fr;
    grid-column-gap: ${bigPadding};
    grid-row-gap: initial;
    align-items: flex-start;
`;

export const StyledPost = styled.article`
    grid-area: post;
`;

export const StyledSidebar = styled.div`
    grid-area: sidebar;
`;

export const StyledTitle = styled.div`
    grid-area: title;
`;

export const StyledNavigationButtonsWrapper = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${defaultPadding};
    justify-content: center;
`;

export interface AllianceLevelingGuideProps {
    loadData: () => void;
    posts: number[];
    postId: number;
    content: string | null;
    title: string | null;
    excerpt: string | null;
}

export const AllianceLevelingGuide: SFC<AllianceLevelingGuideProps> = memo(
    ({ loadData, content, title, excerpt, posts, postId }) => {
        const [nextPost, setNextPost] = useState<number | null>(null);
        const [previousPost, setPreviousPost] = useState<number | null>(null);

        useEffect(() => {
            const index = posts.indexOf(postId);
            const minIndex = 0;
            const maxIndex = posts.length - 1;

            setPreviousPost(index === minIndex ? null : posts[index - 1]);
            setNextPost(index === maxIndex ? null : posts[index + 1]);
        }, [posts, postId]);

        useEffect(() => {
            loadData();
        }, [loadData]);

        useEffect(() => {
            if (window.$WowheadPower) {
                window.$WowheadPower.refreshLinks();
            }
        }, [content]);

        return (
            <>
                <Helmet>
                    {title ? (
                        <title>{decodeHTMLEntities(title)} - Deathblind</title>
                    ) : (
                        <title>Alliance Leveling Guide - Deathblind</title>
                    )}

                    {excerpt && <meta name="description" content={excerpt!} />}
                </Helmet>

                <StyledAllianceLevelingGuide>
                    <StyledSidebar>
                        <Sidebar />
                    </StyledSidebar>

                    <StyledTitle>
                        <h1 dangerouslySetInnerHTML={{ __html: title! }}></h1>
                    </StyledTitle>

                    <StyledPost>
                        <StyledPostContent
                            dangerouslySetInnerHTML={{ __html: content! }}
                        ></StyledPostContent>

                        {content && (
                            <StyledNavigationButtonsWrapper>
                                <Cta
                                    to={`/alliance-leveling-guide/${previousPost}`}
                                    disabled={!previousPost}
                                >
                                    Previous Section
                                </Cta>
                                <Cta
                                    to={`/alliance-leveling-guide/${nextPost}`}
                                    disabled={!nextPost}
                                >
                                    Next Section
                                </Cta>
                            </StyledNavigationButtonsWrapper>
                        )}
                    </StyledPost>
                </StyledAllianceLevelingGuide>
            </>
        );
    }
);

interface ConnectedToPostProps {
    match: match<{ postId: string }>;
}

const mapStateToProps = (
    state: RootState,
    {
        match: {
            params: { postId }
        }
    }: ConnectedToPostProps
) => {
    const postID = +postId || 991;
    const post = getPostById(postID)(state);
    let index = 1;

    return {
        postId: postID,
        posts: getPostsAsIds(state),
        content: post
            ? post.content.rendered
                  .replace(new RegExp("<li>", "g"), function() {
                      return `<li>
                          <label>
                              <input type='checkbox' data-id="${postID}:${index}" />
                              <div></div>
                          </label>
                          <div>
                      `;
                  })
                  .replace(new RegExp("</li>", "g"), `</div></li>`)
                  .replace(
                      /\!\?\</g,
                      `
                        <img class="quest-icon" src="${QuestAvailable}" />
                        <img class="quest-icon" src="${QuestComplete}" /><
                      `
                  )
                  .replace(
                      /\!\</g,
                      `<img class="quest-icon" src="${QuestAvailable}" /><`
                  )
                  .replace(
                      /\?\</g,
                      `<img class="quest-icon" src="${QuestComplete}" /><`
                  )
                  .replace(new RegExp("<img", "g"), `<img loading="lazy"`)
            : null,
        title: post ? post.title.rendered : null,
        excerpt: post ? post.excerpt.rendered : null
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    loadData: () => {
        dispatch(loadPosts());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllianceLevelingGuide);

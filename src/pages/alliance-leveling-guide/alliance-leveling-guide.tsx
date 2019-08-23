import React, { memo, SFC, useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/root";
import { defaultPadding, bigPadding, bigMargin } from "../../theme/theme/sizes";
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
import { tablet, desktop, hideOnMobile } from "../../theme/theme/responsive";

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
    grid-gap: ${defaultPadding};
    line-height: 1.5;

    ${tablet`
        grid-template-columns: 1fr 1fr;
    `}

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
        "title"
        "sidebar"
        "post";

    grid-template-columns: 1fr;
    grid-column-gap: ${bigPadding};
    grid-row-gap: ${bigPadding};
    align-items: flex-start;

    ${desktop`
        grid-template-areas:
            ". title"
            "sidebar post";

        grid-template-columns: 250px 1fr;
        grid-row-gap: initial;
    `}
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${defaultPadding};
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${bigMargin};

    ${tablet`
        grid-template-columns: auto auto;
    `}
`;

export const StyledNextPrevTitle = styled.strong`
    ${hideOnMobile};
`;

export const StyledPageHeader = styled.h1``;

export interface AllianceLevelingGuideProps {
    loadData: () => void;
    content: string | null;
    title: string | null;
    excerpt: string | null;
    previousPostId: number | null;
    previousPostTitle: string | null;
    nextPostId: number | null;
    nextPostTitle: string | null;
}

export const AllianceLevelingGuide: SFC<AllianceLevelingGuideProps> = memo(
    ({
        loadData,
        content,
        title,
        excerpt,
        previousPostId,
        previousPostTitle,
        nextPostId,
        nextPostTitle
    }) => {
        useEffect(() => {
            loadData();
        }, [loadData]);

        useEffect(() => {
            if (window.$WowheadPower) {
                try {
                    window.$WowheadPower.refreshLinks();
                } catch {}
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
                        <StyledPageHeader
                            dangerouslySetInnerHTML={{ __html: title! }}
                        ></StyledPageHeader>
                    </StyledTitle>

                    <StyledPost>
                        {content && (
                            <StyledNavigationButtonsWrapper>
                                <Cta
                                    to={`/alliance-leveling-guide/${previousPostId}`}
                                    disabled={!previousPostId}
                                >
                                    Previous{" "}
                                    {previousPostTitle && (
                                        <StyledNextPrevTitle>
                                            ({previousPostTitle})
                                        </StyledNextPrevTitle>
                                    )}
                                </Cta>
                                <Cta
                                    to={`/alliance-leveling-guide/${nextPostId}`}
                                    disabled={!nextPostId}
                                >
                                    Next{" "}
                                    {nextPostTitle && (
                                        <StyledNextPrevTitle>
                                            ({nextPostTitle})
                                        </StyledNextPrevTitle>
                                    )}
                                </Cta>
                            </StyledNavigationButtonsWrapper>
                        )}

                        <StyledPostContent
                            dangerouslySetInnerHTML={{ __html: content! }}
                        ></StyledPostContent>

                        {content && (
                            <StyledNavigationButtonsWrapper>
                                <Cta
                                    to={`/alliance-leveling-guide/${previousPostId}`}
                                    disabled={!previousPostId}
                                >
                                    Previous{" "}
                                    {previousPostTitle && (
                                        <StyledNextPrevTitle>
                                            ({previousPostTitle})
                                        </StyledNextPrevTitle>
                                    )}
                                </Cta>
                                <Cta
                                    to={`/alliance-leveling-guide/${nextPostId}`}
                                    disabled={!nextPostId}
                                >
                                    Next{" "}
                                    {nextPostTitle && (
                                        <StyledNextPrevTitle>
                                            ({nextPostTitle})
                                        </StyledNextPrevTitle>
                                    )}
                                </Cta>
                            </StyledNavigationButtonsWrapper>
                        )}
                    </StyledPost>
                </StyledAllianceLevelingGuide>
            </>
        );
    }
);

const getPrevNextPostIds = (
    postId: number,
    posts: number[]
): (number | null)[] => {
    const currentPostIndex = posts.indexOf(postId);
    const minPostIndex = 0;
    const maxPostIndex = posts.length - 1;

    const previousPostId =
        currentPostIndex === minPostIndex ? null : posts[currentPostIndex - 1];
    const nextPostId =
        currentPostIndex === maxPostIndex ? null : posts[currentPostIndex + 1];

    return [previousPostId, nextPostId];
};

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
    const posts = getPostsAsIds(state);
    const postID = +postId || posts[0];
    const post = getPostById(postID)(state);
    let index = 1;

    const [previousPostId, nextPostId] = getPrevNextPostIds(postID, posts);
    const previousPost = getPostById(previousPostId!)(state);
    const previousPostTitle = previousPost
        ? decodeHTMLEntities(previousPost.title.rendered)
        : null;

    const nextPost = getPostById(nextPostId!)(state);
    const nextPostTitle = nextPost
        ? decodeHTMLEntities(nextPost.title.rendered)
        : null;

    return {
        content: post
            ? post.content.rendered
                  .replace(new RegExp("<li>", "g"), function() {
                      return `<li>
                          <label>
                              <input type='checkbox' data-id="${postID}:${index++}" />
                              <div></div>
                          </label>
                          <div>
                      `;
                  })
                  .replace(new RegExp("</li>", "g"), `</div></li>`)
                  .replace(
                      /!\?</g,
                      `<img class="quest-icon" src="${QuestAvailable}" /><img class="quest-icon" src="${QuestComplete}" /><`
                  )
                  .replace(
                      /!</g,
                      `<img class="quest-icon" src="${QuestAvailable}" /><`
                  )
                  .replace(
                      /\?</g,
                      `<img class="quest-icon" src="${QuestComplete}" /><`
                  )
                  .replace(new RegExp("<img", "g"), `<img loading="lazy"`)
            : null,
        title: post ? post.title.rendered : null,
        excerpt: post ? post.excerpt.rendered : null,
        previousPostId,
        previousPostTitle,
        nextPostId,
        nextPostTitle
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

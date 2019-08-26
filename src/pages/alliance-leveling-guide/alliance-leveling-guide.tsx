import React, { memo, SFC, useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/root";
import { desktop, hideOnMobile, tablet } from "../../theme/theme/responsive";
import { bigMargin, bigPadding, defaultPadding } from "../../theme/theme/sizes";
import { styled, css } from "../../theme/util/helpers";
import Container from "../../ui/components/container/container";
import Cta from "../../ui/components/cta/cta";
import { decodeHTMLEntities } from "../../util/decode-html-entities";
import { loadPosts } from "../../wordpress/posts/posts.action";
import {
    getPostById,
    getPostsAsIds
} from "../../wordpress/posts/posts.selector";
import { blockStyling as defaultBlockStyling } from "../../wordpress/styles/block";
import Sidebar from "./sidebar/sidebar";
import blockStyling from "./styles/blockStyling";
import checkBoxStyling from "./styles/checkbox";
import imageStyling from "./styles/image";
import listStyling from "./styles/list";
import quoteStyling from "./styles/quote";
import wowStyling from "./styles/wow";
import { compose } from "ramda";
import { isOfTag, isIntroduction } from "../../wordpress/posts/posts.filter";
import { Tags } from "../../wordpress/tags/tags.interface";
import {
    replaceQuestIcons,
    lazyLoadImages,
    createCheckboxes
} from "./alliance-leveling-guide.transformer";
import AdSense from "react-adsense";

declare global {
    interface Window {
        $WowheadPower:
            | {
                  refreshLinks: Function;
              }
            | undefined;
    }
}

export const StyledPostContent = styled.div<{ isLeftRight: boolean }>`
    line-height: 1.5;

    ${props =>
        props.isLeftRight &&
        css`
            display: grid;
            grid-gap: ${defaultPadding};
            ${tablet`
                grid-template-columns: 1fr 1fr;
            `}
        `}

    ${defaultBlockStyling}
    ${wowStyling}

    ${props => props.isLeftRight && blockStyling}
    ${props => props.isLeftRight && imageStyling}
    ${props => props.isLeftRight && quoteStyling}
    ${props => props.isLeftRight && listStyling}
    ${props => props.isLeftRight && checkBoxStyling}
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

export const StyledAd = styled.div``;

export interface NavigationButtonsProps {
    previousPostId: number | null;
    previousPostTitle: string | null;
    nextPostId: number | null;
    nextPostTitle: string | null;
}

export const NavigationButtons: SFC<NavigationButtonsProps> = memo(
    ({ previousPostId, previousPostTitle, nextPostId, nextPostTitle }) => (
        <StyledNavigationButtonsWrapper>
            <Cta
                to={`/alliance-leveling-guide/${
                    isIntroduction(previousPostId) ? "" : previousPostId
                }`}
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
                    <StyledNextPrevTitle>({nextPostTitle})</StyledNextPrevTitle>
                )}
            </Cta>
        </StyledNavigationButtonsWrapper>
    )
);

export interface AllianceLevelingGuideProps extends NavigationButtonsProps {
    loadData: () => void;
    content: string | null;
    isLeftRight: boolean;
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
        isLeftRight,
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
                        <StyledAd>
                            <AdSense.Google
                                client='pub-9237830006365098'
                                slot='9086668325'
                                style={{ display: 'block' }}
                                responsive='true'
                                layoutKey='-gw-1+2a-9x+5c'
                                format='auto'
                            />
                        </StyledAd>

                        {content && (
                            <NavigationButtons
                                previousPostId={previousPostId}
                                previousPostTitle={previousPostTitle}
                                nextPostId={nextPostId}
                                nextPostTitle={nextPostTitle}
                            />
                        )}

                        <StyledPostContent
                            isLeftRight={isLeftRight}
                            dangerouslySetInnerHTML={{ __html: content! }}
                        ></StyledPostContent>

                        <StyledAd>
                            <AdSense.Google
                                client='pub-9237830006365098'
                                slot='2448860368'
                                style={{ display: 'block' }}
                                responsive='true'
                                layoutKey='-gw-1+2a-9x+5c'
                                format='auto'
                            />
                        </StyledAd>

                        {content && (
                            <NavigationButtons
                                previousPostId={previousPostId}
                                previousPostTitle={previousPostTitle}
                                nextPostId={nextPostId}
                                nextPostTitle={nextPostTitle}
                            />
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

    const isPostLeftRight = isOfTag(Tags.LeftImageRightContent)(post);

    const [previousPostId, nextPostId] = getPrevNextPostIds(postID, posts);
    const previousPost = getPostById(previousPostId!)(state);
    const previousPostTitle = previousPost
        ? decodeHTMLEntities(previousPost.title.rendered)
        : null;

    const nextPost = getPostById(nextPostId!)(state);
    const nextPostTitle = nextPost
        ? decodeHTMLEntities(nextPost.title.rendered)
        : null;

    const contentTransform = compose(
        isPostLeftRight
            ? createCheckboxes(index => `${postID}:${index}`)
            : content => content,
        lazyLoadImages,
        replaceQuestIcons
    );

    return {
        isLeftRight: isPostLeftRight,
        content: post ? contentTransform(post.content.rendered) : null,
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

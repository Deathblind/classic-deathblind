import React, { memo, SFC, useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import { RootState } from "../../store/root";
import {
    defaultMargin,
    defaultPadding,
    bigPadding
} from "../../theme/theme/sizes";
import { css, styled } from "../../theme/util/helpers";
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

export interface AllianceLevelingGuideProps {
    loadData: () => void;
    posts: number[];
    content: string | null;
    title: string | null;
    excerpt: string | null;
}

export const AllianceLevelingGuide: SFC<AllianceLevelingGuideProps> = memo(
    ({ loadData, content, title, excerpt }) => {
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
    const post = getPostById(+postId || 991)(state);

    return {
        posts: getPostsAsIds(state),
        content: post
            ? post.content.rendered
                  .replace(
                      new RegExp("<li>", "g"),
                      `<li>
                    <label>
                        <input type='checkbox' />
                        <div></div>
                    </label>
                    <div>`
                  )
                  .replace(new RegExp("</li>", "g"), `</div></li>`)
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

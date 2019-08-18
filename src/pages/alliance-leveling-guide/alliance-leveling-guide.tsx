import React, { memo, SFC, useEffect } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import Checkmark from "../../icons/checkmark.svg";
import { RootState } from "../../store/root";
import {
    npcForeground,
    pageBackground,
    primaryAccentBackground,
    primarySaturatedBackground,
    questForeground
} from "../../theme/theme/colors";
import { h4FontSize } from "../../theme/theme/font-sizes";
import {
    defaultBorderRadius,
    defaultMargin,
    defaultPadding,
    bigPadding
} from "../../theme/theme/sizes";
import { css, styled } from "../../theme/util/helpers";
import Container from "../../ui/components/container/container";
import afloatBoxShadow from "../../ui/util/afloat-box-shadow/afloat-box-shadow";
import { decodeHTMLEntities } from "../../util/decode-html-entities";
import { loadPosts } from "../../wordpress/posts/posts.action";
import {
    getPostById,
    getPostsAsIds
} from "../../wordpress/posts/posts.selector";
import Sidebar from "./sidebar/sidebar";

declare global {
    interface Window {
        $WowheadPower:
            | {
                  refreshLinks: Function;
              }
            | undefined;
    }
}

const wowheadStyling = css`
    .wowhead {
        color: ${npcForeground};
    }

    .wowhead--quest {
        color: ${questForeground};
    }

    .wowhead--npc {
        color: ${npcForeground};
    }
`;

const checkBoxStyling = css`
    label {
        position: relative;
        width: 24px;
        height: 24px;
        background-color: ${pageBackground};
        border-radius: ${defaultBorderRadius};
        cursor: pointer;
    }

    label input {
        visibility: hidden;
        opacity: 0;
    }

    label div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        border-radius: ${defaultBorderRadius};
        background-color: ${primaryAccentBackground};
        background-image: url(${Checkmark});
        opacity: 0;
    }

    label input:checked + div {
        opacity: 1;
    }
`;

const orderedListStyling = css`
    ol {
        display: grid;
        grid-row-gap: ${defaultPadding};
        counter-reset: li;
        padding: 0;
        font-family: sans-serif;
        list-style: none;

        li {
            display: grid;
            grid-template-columns: min-content auto;
            grid-column-gap: ${defaultPadding};
            align-items: center;
            position: relative;

            padding: ${defaultPadding};
            background-color: ${primarySaturatedBackground};
            border-radius: ${defaultBorderRadius};
            ${afloatBoxShadow};

            ol {
                grid-column: 1/-1;
                margin-bottom: 0;
                margin-top: ${defaultMargin};
            }

            li {
                background-color: transparent;
            }

            &:before {
                content: counter(li);
                counter-increment: li;
                position: absolute;
                top: -16px;
                left: -16px;
                box-sizing: border-box;
                width: 32px;
                color: ${primaryAccentBackground};
                font-weight: bold;
                font-size: ${h4FontSize};
                text-align: center;
                text-shadow: 1px 1px #000;
            }
        }
    }
`;

export const StyledPost = styled.article``;

export const StyledPostContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${defaultPadding};
    line-height: 1.5;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        grid-column: 1/-1;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    ul,
    ol {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding-top: 1.5rem;
    }

    ul,
    ol {
        padding-left: 40px;
    }

    img {
        max-width: 100%;
        max-height: 90vh;
        position: sticky;
        top: ${defaultPadding};
        ${afloatBoxShadow};
        border-radius: ${defaultBorderRadius};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    ul,
    ol,
    figure {
        margin-bottom: ${defaultMargin};
    }

    ${orderedListStyling}
    ${checkBoxStyling}
    ${wowheadStyling}
`;

export const StyledAllianceLevelingGuide = styled(Container)`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: ${bigPadding};
    align-items: flex-start;
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
                    <Sidebar />

                    <StyledPost>
                        <h1 dangerouslySetInnerHTML={{ __html: title! }}></h1>

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
    const post = getPostById(+postId || 719)(state);

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

import React, { memo, SFC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, Dispatch } from "redux";
import Checkmark from "../../icons/checkmark.svg";
import { RootState } from "../../store/root";
import {
    pageBackground,
    primaryAccentBackground,
    primarySaturatedBackground
} from "../../theme/theme/colors";
import { h4FontSize } from "../../theme/theme/font-sizes";
import {
    defaultBorderRadius,
    defaultMargin,
    defaultPadding
} from "../../theme/theme/sizes";
import { css, styled } from "../../theme/util/helpers";
import Container from "../../ui/components/container/container";
import afloatBoxShadow from "../../ui/util/afloat-box-shadow/afloat-box-shadow";
import { decodeHTMLEntities } from "../../util/decode-html-entities";
import { loadAuthors } from "../../wordpress/authors/authors.action";
import { getAuthorById } from "../../wordpress/authors/authors.selector";
import { loadPosts } from "../../wordpress/posts/posts.action";
import { getPostById } from "../../wordpress/posts/posts.selector";

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
`;

export interface PostProps {
    loadData: () => void;
    content: string | null;
    title: string | null;
    author: string | null;
    excerpt: string | null;
}

export const Post: SFC<PostProps> = memo(
    ({ loadData, content, title, excerpt, author }) => {
        useEffect(() => {
            loadData();
        }, [loadData]);

        return (
            <>
                <Helmet>
                    {title && (
                        <title>{decodeHTMLEntities(title)} - Deathblind</title>
                    )}
                    {excerpt && <meta name="description" content={excerpt!} />}
                </Helmet>

                <StyledPost>
                    <Container>
                        <h1 dangerouslySetInnerHTML={{ __html: title! }}></h1>

                        <StyledPostContent
                            dangerouslySetInnerHTML={{ __html: content! }}
                        ></StyledPostContent>
                    </Container>
                </StyledPost>
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
    const post = getPostById(+postId)(state);
    const author = post && getAuthorById(post.author)(state);

    return {
        content: post
            ? post.content.rendered
                  .replace(
                      new RegExp("<li>", "g"),
                      `<li>
                    <label>
                        <input type='checkbox'
                            onclick="this.checked && this.parentNode.parentNode.nextElementSibling
                                ? this.parentNode.parentNode.nextElementSibling.scrollIntoView(false)
                                : null"
                        />
                        <div></div>
                    </label>
                    <div>`
                  )
                  .replace(new RegExp("</li>", "g"), `</div></li>`)
            : null,
        title: post ? post.title.rendered : null,
        excerpt: post ? post.excerpt.rendered : null,
        author: author ? author.name : null
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    loadData: () => {
        dispatch(loadPosts());
        dispatch(loadAuthors());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);

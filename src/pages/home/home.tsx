import React, {SFC, memo, useEffect, useState} from "react";
import {OverlappingHeader} from "../../layout/header/header";
import Container from "../../ui/components/container/container";
import highlightBoxShadow from "../../ui/util/highlight-box-shadow/highlight-box-shadow";
import {styled} from "../../theme/util/helpers";
import Ratio from "../../ui/components/ratio/ratio";
import {defaultBorderRadius} from "../../theme/theme/sizes";
import LatestVideos from "./latest-videos/latest-videos";
import LatestPosts from "./latest-posts/latest-posts";
import {connect} from "react-redux";
import {loadPosts} from "../../wordpress/posts/posts.action";
import {RootState} from "../../store/root";
import {getPostsAsIds} from "../../wordpress/posts/posts.selector";
import {loadAuthors} from "../../wordpress/authors/authors.action";
import {Dispatch, Action} from "redux";

const StyledVideoContainer = styled(Container)`
    max-width: 50vw;
`;

const StyledIframe = styled.iframe`
    ${highlightBoxShadow};
    border-radius: ${defaultBorderRadius};
`;

export interface HomeProps {
    loadData: () => void;
    posts: number[];
}

export const Home: SFC<HomeProps> = memo(({ loadData, posts }) => {
    const [latestPosts, setLatestPosts] = useState<number[]>([]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    useEffect(() => {
        setLatestPosts(posts ? posts.slice(0, 5) : []);
    }, [posts]);

    return <>
        <StyledVideoContainer>
            <OverlappingHeader>
                <Ratio antecedent={16} consequent={9}>
                    <StyledIframe
                        src="https://player.twitch.tv/?channel=hydramist"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></StyledIframe>
                </Ratio>
            </OverlappingHeader>
        </StyledVideoContainer>

        <Container>
            <LatestVideos />
        </Container>

        <Container>
            <LatestPosts posts={latestPosts} />
        </Container>
    </>;
});

const mapStateToProps = (state: RootState) => ({
    posts: getPostsAsIds(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    loadData: () => {
        dispatch(loadPosts());
        dispatch(loadAuthors());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
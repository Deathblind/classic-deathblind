import React, { SFC, memo, useEffect } from "react";
import Container from "../../ui/components/container/container";
import highlightBoxShadow from "../../ui/util/highlight-box-shadow/highlight-box-shadow";
import { styled } from "../../theme/util/helpers";
import Ratio from "../../ui/components/ratio/ratio";
import { bigBorderRadius } from "../../theme/theme/sizes";
import { connect } from "react-redux";
import { loadPosts } from "../../wordpress/posts/posts.action";
import { RootState } from "../../store/root";
import { loadAuthors } from "../../wordpress/authors/authors.action";
import { Dispatch, Action } from "redux";
import { getVideos } from "../../youtube/youtube.selector";
import Helmet from "react-helmet";

const StyledVideoContainer = styled(Container)`
    max-width: 50vw;
    min-width: 300px;
`;

const StyledIframe = styled.iframe`
    ${highlightBoxShadow};
    border-radius: ${bigBorderRadius};
`;

export interface HomeProps {
    loadData: () => void;
}

export const Home: SFC<HomeProps> = memo(({ loadData }) => {
    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <>
            <Helmet>
                <title>Deathblind by Hydramist</title>
            </Helmet>

            <StyledVideoContainer>
                <Ratio antecedent={16} consequent={9}>
                    <StyledIframe
                        src="https://player.twitch.tv/?channel=hydramist"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></StyledIframe>
                </Ratio>
            </StyledVideoContainer>
        </>
    );
});

const mapStateToProps = (state: RootState) => ({
    videos: getVideos(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    loadData: () => {
        dispatch(loadPosts());
        dispatch(loadAuthors());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

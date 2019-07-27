import React, { SFC, memo } from "react";
import { styled } from "../../../theme/util/helpers";
import VideoTile from "../../../ui/components/video-tile/video-tile";
import {
    smallPadding,
    defaultPadding,
    defaultBorderRadius
} from "../../../theme/theme/sizes";
import Ratio from "../../../ui/components/ratio/ratio";
import afloatBoxShadow from "../../../ui/util/afloat-box-shadow/afloat-box-shadow";
import { Item } from "../../../youtube/youtube.interface";

export const StyledLatestVideos = styled.div`
    display: grid;
    grid-row-gap: ${defaultPadding};
    justify-items: center;
    grid-template-columns: 1fr;
`;

export const StyledLatestVideoGrid = styled.div`
    width: 100%;
    display: grid;
    grid-column-gap: ${smallPadding};
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`;

export const StyledLatestVideoHightlight = styled.div`
    max-width: 40vw;
    width: 100%;
    ${afloatBoxShadow}
    border-radius: ${defaultBorderRadius};
`;

export interface LatestVideosProps {
    videos: Item[];
}

export const LatestVideos: SFC<LatestVideosProps> = memo(({ videos }) => {
    const [latestVideo, ...others] = videos;

    return (
        <StyledLatestVideos>
            <h2>Latest Videos</h2>

            {latestVideo && (
                <StyledLatestVideoHightlight>
                    <Ratio antecedent={4} consequent={2}>
                        <iframe
                            src={`https://www.youtube.com/embed/${latestVideo.id.videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Ratio>
                </StyledLatestVideoHightlight>
            )}

            {others && (
                <StyledLatestVideoGrid>
                    {others.map(video => (
                        <VideoTile key={video.id.videoId}>
                            <Ratio antecedent={4} consequent={2}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </Ratio>
                        </VideoTile>
                    ))}
                </StyledLatestVideoGrid>
            )}
        </StyledLatestVideos>
    );
});

export default LatestVideos;

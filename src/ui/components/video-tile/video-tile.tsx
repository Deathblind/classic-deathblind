import React, { SFC, memo } from "react";
import { styled } from "../../../theme/util/helpers";
import afloatBoxShadow from "../../util/afloat-box-shadow/afloat-box-shadow";
import { bigBorderRadius } from "../../../theme/theme/sizes";

export const StyledVideoTile = styled.div`
    border-radius: ${bigBorderRadius};
    ${afloatBoxShadow}
`;

export const VideoTile: SFC = memo(({ children }) => (
    <StyledVideoTile>{children}</StyledVideoTile>
));

export default VideoTile;

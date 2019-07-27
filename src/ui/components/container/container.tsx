import {styled, css} from "../../../theme/util/helpers";
import {containerMaxWidth, defaultPadding} from "../../../theme/theme/sizes";
import CanCenter from "../../util/centered";

export const Container = styled.div<CanCenter>`
    display: grid;
    grid-gap: ${defaultPadding};
    width: 100%;
    max-width: ${containerMaxWidth};

    ${({ center}) => center && css`
        justify-items: center;
    `}
`;

export default Container;
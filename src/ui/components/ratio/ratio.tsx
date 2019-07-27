import React, {SFC, memo} from "react";
import {styled} from "../../../theme/util/helpers";
import coverParent from "../../util/cover-parent/cover-parent";

export interface RatioProps {
    antecedent: number;
    consequent: number;
}

type RatioOnly = Pick<RatioProps, "antecedent" | "consequent">;

export const StyledRatio = styled.div<RatioOnly>`
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        display: block;
        width: 100%;
        padding-bottom: calc(${({ antecedent, consequent }) => consequent / antecedent} * 100%);
    }
`;

export const StyledRatioChildren = styled.div`
    ${coverParent}

    > :last-child {
        width: 100%;
        height: 100%;
    }
`;

export const Ratio: SFC<RatioProps> = memo(({antecedent, consequent, children}) => <StyledRatio antecedent={antecedent} consequent={consequent}>
    <StyledRatioChildren>{children}</StyledRatioChildren>
</StyledRatio>);

export default Ratio;
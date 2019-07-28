import { styled } from "../../theme/util/helpers";

export interface LazyAccessibleImage {
    loading?: "lazy" | null;
    alt: string;
    title: string;
}

export const Image = styled.img<LazyAccessibleImage>`
    max-width: 100%;
    vertical-align: middle;
`;

export default Image;

Image.defaultProps = {
    loading: "lazy"
};

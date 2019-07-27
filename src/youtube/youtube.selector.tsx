import { RootState } from "../store/root";
import { compose } from "ramda";

export const getYoutube = ({ youtube }: RootState) => youtube;
export const getVideos = compose(
    ({ data }) => (data ? data.items : []),
    getYoutube
);

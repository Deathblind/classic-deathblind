import {createLoadReducer} from "../store/utility/load/reducer";
import {AsyncState} from "../store/utility/async/state";
import {loadVideos, loadVideosComplete} from "./youtube.action";
import {YoutubeUploads} from "./youtube.interface";

export interface YoutubeState extends AsyncState<YoutubeUploads> {}

export const youtubeReducer = createLoadReducer<YoutubeUploads>(
    loadVideos.type,
    loadVideosComplete.type
);
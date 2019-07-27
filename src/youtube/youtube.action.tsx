import {createAction} from "redux-starter-kit";
import {LoadAction, LoadCompleteAction} from "../store/utility/load/action";
import {YoutubeUploads} from "./youtube.interface";

export const loadVideos = createAction<LoadAction>("@@youtube/LOAD_VIDEOS");
export const loadVideosComplete = createAction<LoadCompleteAction<YoutubeUploads>>("@@youtube/LOAD_VIDEOS_COMPLETE");
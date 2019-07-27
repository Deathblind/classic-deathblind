import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { historyReducer } from "./states/history/history.reducer";
import { ThemeInterface } from "../theme/util/helpers";
import { Location } from "history";
import { historyEpic } from "./states/history/history.effect";
import { themeReducer } from "../theme/theme.reducer";
import {
    wordpressReducer,
    WordpressState
} from "../wordpress/wordpress.reducer";
import { wordpressEpic } from "../wordpress/wordpress.effect";
import { youtubeReducer, YoutubeState } from "../youtube/youtube.reducer";
import { youtubeEpic } from "../youtube/youtube.effect";

export interface RootState {
    theme: ThemeInterface;
    location: Location | null;
    wordpress: WordpressState;
    youtube: YoutubeState;
}

export const rootReducer = combineReducers<RootState>({
    theme: themeReducer,
    location: historyReducer,
    wordpress: wordpressReducer,
    youtube: youtubeReducer
});

export const rootEpic = combineEpics(historyEpic, wordpressEpic, youtubeEpic);

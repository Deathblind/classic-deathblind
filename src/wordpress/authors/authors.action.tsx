import {createAction} from "redux-starter-kit";
import {LoadAction, LoadCompleteAction} from "../../store/utility/load/action";
import {Author} from "./authors.interface";

export const loadAuthors = createAction<LoadAction>("@@wordpress/LOAD_AUTHORS");
export const loadAuthorsComplete = createAction<LoadCompleteAction<Author[]>>("@@wordpress/LOAD_AUTHORS_COMPLETE");
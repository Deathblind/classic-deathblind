import {createLoadReducer} from "../../store/utility/load/reducer";
import {loadAuthors, loadAuthorsComplete} from "./authors.action";
import {AsyncState} from "../../store/utility/async/state";
import {Author} from "./authors.interface";

export interface AuthorsState extends AsyncState<Author[]> {}

export const authorsReducer = createLoadReducer<Author[]>(
    loadAuthors.type,
    loadAuthorsComplete.type
);
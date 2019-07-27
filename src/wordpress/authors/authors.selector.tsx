import {compose} from "ramda";
import {getWordpress} from "../wordpress.selector";
import {createSelector} from "reselect";

export const getAuthors = compose(
    ({ authors }) => authors,
    getWordpress
);

export const getAuthorsData = compose(
    ({data}) => data || [],
    getAuthors
);

export const getAuthorById = (id: number) => createSelector(
    getAuthorsData,
    authors => authors.find(author => author.id === id)
);
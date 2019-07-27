import {get} from "../../http/instance";
import {Author} from "./authors.interface";

export const fetchAuthors = () => get<Author[]>("/users");
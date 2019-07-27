import sortWith from "ramda/es/sortWith";
import descend from "ramda/es/descend";
import { Item } from "./youtube.interface";

export const sortVideosByDate = sortWith<Item>([
    descend(item => item.snippet.publishedAt)
]);

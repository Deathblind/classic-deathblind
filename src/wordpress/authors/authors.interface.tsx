import {CollectionItem, SelfItem} from "../wordpress.interface";

export interface Author {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: AvatarUrls;
    meta: any[];
    _links: AuthorLinks;
}

export interface AvatarUrls {
    24: string;
    48: string;
    96: string;
}

export interface AuthorLinks {
    self: SelfItem[];
    collection: CollectionItem[];
}
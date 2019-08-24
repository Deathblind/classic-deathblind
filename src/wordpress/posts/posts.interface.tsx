import { SelfItem, CollectionItem } from "../wordpress.interface";
import { Author } from "../authors/authors.interface";
import { Tags } from "../tags/tags.interface";
import { Categories } from "../categories/categories.interface";

export interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: Categories[];
    tags: Tags[];
    _links: PostLinks;
    _embedded: Embedded;
}

export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Excerpt {
    rendered: string;
    protected: boolean;
}

export interface PostLinks {
    self: SelfItem[];
    collection: CollectionItem[];
    about: AboutItem[];
    author: AuthorItem[];
    replies: RepliesItem[];
    "version-history": VersionHistoryItem[];
    "predecessor-version": PredecessorVersionItem[];
    "wp:attachment": WpAttachmentItem[];
    "wp:term": WpTermItem[];
    curies: CuriesItem[];
}

export interface Embedded {
    author: Author[];
}

export interface AboutItem {
    href: string;
}

export interface AuthorItem {
    embeddable: boolean;
    href: string;
}

export interface RepliesItem {
    embeddable: boolean;
    href: string;
}

export interface VersionHistoryItem {
    count: number;
    href: string;
}

export interface PredecessorVersionItem {
    id: number;
    href: string;
}

export interface WpAttachmentItem {
    href: string;
}

export interface WpTermItem {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface CuriesItem {
    name: string;
    href: string;
    templated: boolean;
}

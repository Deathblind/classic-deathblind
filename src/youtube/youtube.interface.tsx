export interface YoutubeUploads {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: ItemsItem[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface ItemsItem {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}

export interface Id {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
}

export interface Thumbnails {
    "default": {
        url: string;
        width: number;
        height: number;
    };
    medium: Medium;
    high: High;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

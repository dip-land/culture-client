export default class e621 {
    constructor(options: e621Options);
    fullpost: boolean | undefined;
    userAgent: string;
    limit: number;
    tags: string;
    post: Promise<e621Post>;
}
declare type e621Options = {
    tags?: Array<string>;
    limit?: number;
    fullpost?: boolean | undefined;
    userAgent: string;
};
declare type e621Post = {
    id?: number;
    image?: string;
    rating: string;
    tags: {
        general?: Array<string>;
        species?: Array<string>;
        character?: Array<string>;
        artist?: Array<string>;
        invalid?: Array<string>;
        lore?: Array<string>;
        meta?: Array<string>;
    };
    author?: Array<string> | undefined;
    sources: Array<string>;
    created_at: string;
    updated_at?: string;
    file?: {
        width?: number;
        height?: number;
        ext?: string;
        md5?: string;
        url?: string;
    };
    preview?: {
        width?: number;
        height?: number;
        url?: string;
    };
    sample?: {
        has?: boolean;
        width?: number;
        height?: number;
        url?: string;
        alternates?: object;
    };
    score?: {
        up?: number;
        down?: number;
        total?: number;
    };
    locked_tags?: Array<string>;
    change_seq?: number;
    flags?: {
        pending?: boolean;
        flagged?: boolean;
        note_locked?: boolean;
        status_locked?: boolean;
        rating_locked?: boolean;
        deleted?: boolean;
    };
    fav_count?: number;
    pools?: Array<unknown>;
    relationships?: {
        parent_id?: number;
        has_children?: boolean;
        has_active_children?: boolean;
        children?: Array<unknown>;
    };
    approver_id?: number | null;
    uploader_id?: number;
    description?: string;
    comment_count?: number;
    is_favorited?: boolean;
    has_notes?: boolean;
    duration?: number;
};
export {};

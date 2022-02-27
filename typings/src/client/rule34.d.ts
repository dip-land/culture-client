export default class rule34 {
    constructor(options?: rule34Options);
    fullpost: boolean | undefined;
    limit: number;
    tags: string;
    post: Promise<rule34Post>;
}
declare type rule34Options = {
    tags?: Array<string>;
    limit?: number;
    fullpost?: boolean | undefined;
};
declare type rule34Post = {
    height?: string;
    score?: string;
    file_url?: string;
    parent_id?: string;
    sample_url?: string;
    sample_width?: string;
    sample_height?: string;
    preview_url?: string;
    rating: string;
    tags: string | Array<string>;
    id?: string;
    width?: string;
    change?: string;
    md5?: string;
    creator_id?: string;
    has_children?: string;
    created_at: string;
    status?: string;
    source: string;
    has_notes?: string;
    has_comments?: string;
    preview_width?: string;
    preview_height?: string;
    image: string | undefined;
};
export {};

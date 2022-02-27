import baseHandler from "./handlers/_";
export default class e621 {
    constructor(options: e621Options) {
        this.fullpost = options?.fullpost;
        this.limit = options?.limit ?? 50;
        this.tags = options?.tags?.join('+') ?? '';
        this.userAgent = options.userAgent;
        if (!this.userAgent) throw new Error('options.userAgent is required! Example userAgent "MyProject/1.0 (by username on e621)"');
        const urlOptions = `limit=${this.limit}&tags=${this.tags}`
        this.post = new Promise((resolve) => {
            new baseHandler().get(`https://e621.net/posts.json?${urlOptions}`, { userAgent: this.userAgent }).then((body: any) => {
                const posts = body.posts;
                const post: e621Post = posts[Math.floor(Math.random() * posts.length)];
                this.fullpost ? resolve(post) : resolve({
                    image: post.file?.url,
                    rating: post.rating,
                    tags: post.tags,
                    sources: post.sources,
                    created_at: post.created_at,
                    author: post.tags.artist,
                })
            })
        })
    }
    fullpost: boolean | undefined;
    userAgent: string;
    limit: number;
    tags: string;
    post: Promise<e621Post>;
}

type e621Options = {
    tags?: Array<string>,
    limit?: number,
    fullpost?: boolean | undefined,
    userAgent: string,
}

type e621Post = {
    id?: number,
    image?: string,
    rating: string,
    tags: {
        general?: Array<string>,
        species?: Array<string>,
        character?: Array<string>,
        artist?: Array<string>,
        invalid?: Array<string>,
        lore?: Array<string>,
        meta?: Array<string>,
    },
    author?: Array<string> | undefined,
    sources: Array<string>,
    created_at: string,
    updated_at?: string,
    file?: {
        width?: number,
        height?: number,
        ext?: string,
        md5?: string,
        url?: string,
    }
    preview?: {
        width?: number,
        height?: number,
        url?: string,
    },
    sample?: {
        has?: boolean,
        width?: number,
        height?: number,
        url?: string,
        alternates?: object,
    },
    score?: {
        up?: number,
        down?: number,
        total?: number,
    },
    locked_tags?: Array<string>,
    change_seq?: number,
    flags?: {
        pending?: boolean,
        flagged?: boolean,
        note_locked?: boolean,
        status_locked?: boolean,
        rating_locked?: boolean,
        deleted?: boolean,
    },
    fav_count?: number,
    pools?: Array<unknown>,
    relationships?: {
        parent_id?: number,
        has_children?: boolean,
        has_active_children?: boolean,
        children?: Array<unknown>,
    },
    approver_id?: number | null,
    uploader_id?: number,
    description?: string,
    comment_count?: number,
    is_favorited?: boolean,
    has_notes?: boolean,
    duration?: number,
}

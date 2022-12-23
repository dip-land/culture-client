import baseHandler from "./handlers/_";
export default class danbooru {
    constructor(options?: danbooruOptions) {
        // this.fullpost = options?.fullpost;
        // this.limit = options?.limit ?? 50;
        // this.tags = options?.tags?.join('+') ?? '';
        // const urlOptions = `limit=${this.limit}&order=none&tags=${this.tags}`
    }
    getPost(id: number): Promise<danbooruPost> {
        return new Promise((resolve) => {
            new baseHandler().get(`https://danbooru.donmai.us/posts/${id}.json`).then((post: danbooruPost) => {
                this.fullpost ? resolve(post) : resolve({
                    image: post.file_url || post.large_file_url || post.preview_file_url,
                    rating: post.rating,
                    tags: post.tag_string?.split(' '),
                    artist: post.tag_string_artist,
                    source: post.source,
                    created_at: post.created_at
                })
            })
        })
    }
    getPosts() {

    }
    fullpost: boolean | undefined;
    limit: number;
    tags: string;
}

type danbooruOptions = {
    tags: Array<string>,
    limit: number,
    fullpost: boolean | undefined,
}

type danbooruPostsOptions = {
    user?: string,
    "-user"?: string,
    fav?: string,
    "-fav"?: string,
    ordfav?:string,
    favcount?:string,
    order?:string,
    approver?:string,
    commenter?:string,
    comment?:string,
    noter?:string,
    noteupdater?:string,
    note?:string,
    status?:string,
    flagger?:string,
    appealer?:string,
    commentary?:string,
    favgroup?:string,
    "-favgroup"?:string,
    ordfavgroup?:string,
    search?:string,
    id?:string,
    date?:string,
    age?:string,
    "-status"?:string,
    rating?:string,
    "-rating"?:string,
    source?:string,
    "-source"?:string,
    pixiv?:string,
    parent?:string,
    child?:string,
    tagcount?:string,
    score?:string
}

type danbooruPost = {
    image?: string,
    tags?: Array<string> | undefined,
    artist?: string,
    source: string,
    id?: number,
    created_at: string,
    uploader_id?: number,
    score?: number,
    md5?: string,
    last_comment_bumped_at?: string | null,
    rating: string | null,
    image_width?: number,
    image_height?: number,
    tag_string?: string,
    is_note_locked?: boolean,
    fav_count?: number,
    file_ext?: string,
    last_noted_at?: string | null,
    is_rating_locked?: boolean,
    parrent_id?: number | null,
    has_children?: boolean,
    approver_id?: number | null,
    tag_count_general?: number,
    tag_count_artist?: number,
    tag_count_character?: number,
    tag_count_copyright?: number,
    file_size?: number,
    is_status_locked?: boolean,
    up_score?: number,
    down_score?: number,
    is_pending?: boolean,
    is_flagged?: boolean,
    is_deleted?: boolean,
    tag_count?: number,
    upstringd_at?: string,
    is_banned?: boolean,
    pixiv_id?: number | null,
    last_commented_at?: string | null,
    has_active_children?: boolean,
    bit_flags?: number,
    tag_count_meta?: number,
    has_large?: boolean,
    has_visible_children?: boolean,
    tag_string_general?: string,
    tag_string_character?: string,
    tag_string_artist?: string,
    tag_string_meta?: string,
    file_url?: string,
    large_file_url?: string,
    preview_file_url?: string,
}

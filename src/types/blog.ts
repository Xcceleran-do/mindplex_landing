
export interface Blog {
    success: boolean;
    message: string;
    offset: number;
    limit: number;
    blogs: BlogPost[];
}
export interface BlogPost {
    id: number;
    title: string;
    description: string;
    photo_url: string;
    post_slug: string;
    created_at:Date;
}
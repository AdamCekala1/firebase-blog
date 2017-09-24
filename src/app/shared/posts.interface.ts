export interface Post {
    authorId: number;
    content: string;
    createDate: string;
    lastUpdate: string;
    tags?: string[];
    thumbnail: string;
    title: string;
}

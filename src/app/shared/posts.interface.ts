export interface Post {
    authorId: number;
    content: string;
    date: string;
    lastUpdate: string;
    tags?: string[];
    thumbnail: string;
    title: string;
}

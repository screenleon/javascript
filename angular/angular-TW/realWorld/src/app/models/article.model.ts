import { Author } from './author.model';

export interface Article {
    title: string;
    slug: string;
    body: string;
    description: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    tagList: string[];
    author: Author;
    favorited: boolean;
    favoritesCount: number;
}
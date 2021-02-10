import { PostEntity } from '../post/post.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    posts: PostEntity[];
}

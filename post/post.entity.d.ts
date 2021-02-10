import { User } from '../user/user.entity';
export declare class PostEntity {
    id: number;
    text: string;
    title: string;
    time: Date;
    user: User;
}

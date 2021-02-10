import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { User } from '../user/user.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<PostEntity>);
    findAll(): Promise<PostEntity[]>;
    findOne(id: string): Promise<PostEntity>;
    remove(id: string): Promise<void>;
    insert(title: any, text: any, user: User): void;
}

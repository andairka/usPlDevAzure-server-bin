import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    remove(id: string): Promise<void>;
    authenticate(username: any, password: any): Promise<boolean>;
    insert(username: any, password: any, email: any): void;
}

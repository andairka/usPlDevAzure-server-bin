import { UsersService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<User[]>;
    addUser(user: User): void;
}

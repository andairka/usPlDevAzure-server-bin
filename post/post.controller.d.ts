import { PostService } from './post.service';
import { CreatePostRequest } from './CreatePostRequest';
import { UsersService } from '../user/user.service';
import { PostResponse } from './PostResponse';
export declare class PostController {
    private readonly postService;
    private readonly userService;
    constructor(postService: PostService, userService: UsersService);
    getPosts(): Promise<PostResponse[]>;
    addPost(request: CreatePostRequest): Promise<void>;
}

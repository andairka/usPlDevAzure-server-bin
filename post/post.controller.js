"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const CreatePostRequest_1 = require("./CreatePostRequest");
const user_service_1 = require("../user/user.service");
const PostResponse_1 = require("./PostResponse");
let PostController = class PostController {
    constructor(postService, userService) {
        this.postService = postService;
        this.userService = userService;
    }
    getPosts() {
        return this.postService
            .findAll()
            .then((entity) => entity.map((e) => new PostResponse_1.PostResponse(e.text, e.title, e.time, e.user.username)));
    }
    async addPost(request) {
        const authenticated = await this.userService.authenticate(request.username, request.password);
        if (authenticated) {
            const user = await this.userService.findOneByUsername(request.username);
            this.postService.insert(request.title, request.text, user);
        }
        else {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePostRequest_1.CreatePostRequest]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPost", null);
PostController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService,
        user_service_1.UsersService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map
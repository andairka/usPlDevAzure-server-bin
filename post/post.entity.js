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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let PostEntity = class PostEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], PostEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], PostEntity.prototype, "time", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.posts, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], PostEntity.prototype, "user", void 0);
PostEntity = __decorate([
    typeorm_1.Entity()
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map
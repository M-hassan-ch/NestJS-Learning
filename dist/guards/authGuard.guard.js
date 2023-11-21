"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGuard = void 0;
const common_1 = require("@nestjs/common");
let CustomGuard = CustomGuard_1 = class CustomGuard {
    constructor() {
        this.logger = new common_1.Logger(CustomGuard_1.name);
    }
    canActivate(context) {
        var _a;
        this.logger.log("Executing custom guard");
        const req = context.switchToHttp().getRequest();
        const email = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.email;
        return email == 'test' ? true : false;
    }
};
CustomGuard = CustomGuard_1 = __decorate([
    (0, common_1.Injectable)()
], CustomGuard);
exports.CustomGuard = CustomGuard;
//# sourceMappingURL=authGuard.guard.js.map
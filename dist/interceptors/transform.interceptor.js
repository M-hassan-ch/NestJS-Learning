"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let CustomInterceptor = CustomInterceptor_1 = class CustomInterceptor {
    constructor() {
        this.logger = new common_1.Logger(CustomInterceptor_1.name);
    }
    intercept(context, next) {
        this.logger.log("executing custom intercepter");
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (data instanceof Object) {
                data.modified = true;
                data.statusCode = 220;
            }
            return data;
        }));
    }
};
CustomInterceptor = CustomInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], CustomInterceptor);
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=transform.interceptor.js.map
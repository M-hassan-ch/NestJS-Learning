"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FreezePipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreezePipe = void 0;
const common_1 = require("@nestjs/common");
let FreezePipe = FreezePipe_1 = class FreezePipe {
    constructor() {
        this.logger = new common_1.Logger(FreezePipe_1.name);
    }
    transform(value, metadata) {
        this.logger.log("Freezing value");
        Object.freeze(value);
        return value;
    }
};
FreezePipe = FreezePipe_1 = __decorate([
    (0, common_1.Injectable)()
], FreezePipe);
exports.FreezePipe = FreezePipe;
//# sourceMappingURL=freeze.pipe.js.map
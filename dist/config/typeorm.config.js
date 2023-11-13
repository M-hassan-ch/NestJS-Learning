"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
const database_config_1 = require("./database.config");
exports.typeOrmConfig = database_config_1.default;
exports.typeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async () => {
        return database_config_1.default;
    },
};
//# sourceMappingURL=typeorm.config.js.map
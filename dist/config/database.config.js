"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
});
const databaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '../../**/**/*entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/../migrations/*{.ts,.js}']
};
exports.default = databaseConfig;
//# sourceMappingURL=database.config.js.map
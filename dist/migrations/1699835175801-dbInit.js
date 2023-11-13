"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbInit1699835175801 = void 0;
class DbInit1699835175801 {
    constructor() {
        this.name = 'DbInit1699835175801';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_9a993c20751b9867abc60108433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "Employee"`);
    }
}
exports.DbInit1699835175801 = DbInit1699835175801;
//# sourceMappingURL=1699835175801-dbInit.js.map
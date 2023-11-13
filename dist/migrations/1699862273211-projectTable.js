"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTable1699862273211 = void 0;
class ProjectTable1699862273211 {
    constructor() {
        this.name = 'ProjectTable1699862273211';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" integer NOT NULL, CONSTRAINT "PK_2725f461500317f74b0c8f11859" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "Project"`);
    }
}
exports.ProjectTable1699862273211 = ProjectTable1699862273211;
//# sourceMappingURL=1699862273211-projectTable.js.map
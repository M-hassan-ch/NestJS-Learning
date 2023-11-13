"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddedRelations1699862655994 = void 0;
class AddedRelations1699862655994 {
    constructor() {
        this.name = 'AddedRelations1699862655994';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Employee" ADD "projectId" integer`);
        await queryRunner.query(`ALTER TABLE "Employee" ADD CONSTRAINT "FK_4de4720d5a685218e1d4fbf3a08" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Employee" DROP CONSTRAINT "FK_4de4720d5a685218e1d4fbf3a08"`);
        await queryRunner.query(`ALTER TABLE "Employee" DROP COLUMN "projectId"`);
    }
}
exports.AddedRelations1699862655994 = AddedRelations1699862655994;
//# sourceMappingURL=1699862655994-addedRelations.js.map
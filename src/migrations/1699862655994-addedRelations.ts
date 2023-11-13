import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRelations1699862655994 implements MigrationInterface {
    name = 'AddedRelations1699862655994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Employee" ADD "projectId" integer`);
        await queryRunner.query(`ALTER TABLE "Employee" ADD CONSTRAINT "FK_4de4720d5a685218e1d4fbf3a08" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Employee" DROP CONSTRAINT "FK_4de4720d5a685218e1d4fbf3a08"`);
        await queryRunner.query(`ALTER TABLE "Employee" DROP COLUMN "projectId"`);
    }

}

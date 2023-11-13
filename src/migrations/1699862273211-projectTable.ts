import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectTable1699862273211 implements MigrationInterface {
    name = 'ProjectTable1699862273211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "code" integer NOT NULL, CONSTRAINT "PK_2725f461500317f74b0c8f11859" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Project"`);
    }

}

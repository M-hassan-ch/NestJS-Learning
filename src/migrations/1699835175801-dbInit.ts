import { MigrationInterface, QueryRunner } from "typeorm";

export class DbInit1699835175801 implements MigrationInterface {
    name = 'DbInit1699835175801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Employee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_9a993c20751b9867abc60108433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Employee"`);
    }

}

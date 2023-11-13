import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DbInit1699835175801 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

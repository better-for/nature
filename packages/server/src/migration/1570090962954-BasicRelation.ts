import {MigrationInterface, QueryRunner} from "typeorm";

export class BasicRelation1570090962954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `store_vegi_types_vegi_type` (`storeId` varchar(36) NOT NULL, `vegiTypeId` int NOT NULL, INDEX `IDX_5f2b469d5e9f775aeb4baaaacb` (`storeId`), INDEX `IDX_3550d455c2d783ced1bac8ef60` (`vegiTypeId`), PRIMARY KEY (`storeId`, `vegiTypeId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `store_vegi_types_vegi_type` ADD CONSTRAINT `FK_5f2b469d5e9f775aeb4baaaacbc` FOREIGN KEY (`storeId`) REFERENCES `store`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `store_vegi_types_vegi_type` ADD CONSTRAINT `FK_3550d455c2d783ced1bac8ef60a` FOREIGN KEY (`vegiTypeId`) REFERENCES `vegi_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `store_vegi_types_vegi_type` DROP FOREIGN KEY `FK_3550d455c2d783ced1bac8ef60a`", undefined);
        await queryRunner.query("ALTER TABLE `store_vegi_types_vegi_type` DROP FOREIGN KEY `FK_5f2b469d5e9f775aeb4baaaacbc`", undefined);
        await queryRunner.query("DROP INDEX `IDX_3550d455c2d783ced1bac8ef60` ON `store_vegi_types_vegi_type`", undefined);
        await queryRunner.query("DROP INDEX `IDX_5f2b469d5e9f775aeb4baaaacb` ON `store_vegi_types_vegi_type`", undefined);
        await queryRunner.query("DROP TABLE `store_vegi_types_vegi_type`", undefined);
    }

}

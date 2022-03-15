import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertTypeSpecialties1647312150115 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO type_specialties(id,name) values ('c1e1a7de-b446-45d2-bb5b-3d067a7705e2', 'Alergologia')," +
        "('c1e1a7de-b446-45d2-bb5b-3d067a7705e3', 'Angiologia'), ('c1e1a7de-b446-45d2-bb5b-3d067a7705e4', 'Buco maxilo')," +
        "('c1e1a7de-b446-45d2-bb5b-3d067a7705e5', 'Cardiologia clínca'), ('c1e1a7de-b446-45d2-bb5b-3d067a7705e6', 'Cardiologia infantil')," +
        "('c1e1a7de-b446-45d2-bb5b-3d067a7705e7', 'Cirurgia cabeça e pescoço'), ('c1e1a7de-b446-45d2-bb5b-3d067a7705e8', 'Cirurgia cardíaca')" +
        "('c1e1a7de-b446-45d2-bb5b-3d067a7705e9', 'Cirurgia de tórax')",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE type_specialties');
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTableDoctorsSpecialties1647312699289
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors_specialties',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'doctor_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'type_specialtie_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'doctors_specialties',
      new TableForeignKey({
        name: 'fk_doctors_specialties',
        columnNames: ['doctor_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'doctors',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'doctors_specialties',
      new TableForeignKey({
        name: 'fk_specialties_doctors',
        columnNames: ['type_specialtie_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'type_specialties',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'doctors_specialties',
      'fk_specialties_doctors',
    );
    await queryRunner.dropForeignKey(
      'doctors_specialties',
      'fk_doctors_specialties',
    );
    await queryRunner.dropTable('fk_specialties_doctors');
  }
}

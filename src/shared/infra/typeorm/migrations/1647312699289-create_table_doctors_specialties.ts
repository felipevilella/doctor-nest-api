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
        name: 'doctors_specialtys_specialties',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'doctorsId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'specialtiesId',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'doctors_specialtys_specialties',
      new TableForeignKey({
        name: 'fk_doctors_specialtys_specialties',
        columnNames: ['doctorsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'doctors',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'doctors_specialtys_specialties',
      new TableForeignKey({
        name: 'fk_specialties_doctors',
        columnNames: ['specialtiesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'specialties',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'doctors_specialtys_specialties',
      'fk_specialties_doctors',
    );
    await queryRunner.dropForeignKey(
      'doctors_specialtys_specialties',
      'fk_doctors_specialtys_specialties',
    );
    await queryRunner.dropTable('fk_specialties_doctors');
  }
}

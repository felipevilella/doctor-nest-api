import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDoctors1647312168714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'crm',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'landline',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cell_phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}

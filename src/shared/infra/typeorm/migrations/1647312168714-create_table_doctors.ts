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
            type: 'BIGINT',
            isNullable: false,
          },
          {
            name: 'cell_phone',
            type: 'BIGINT',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'BIGINT',
            isNullable: false,
          },

          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'is_delete',
            type: 'boolean',
            isNullable: true,
            default: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}

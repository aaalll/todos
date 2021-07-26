import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTodo1557525412792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.createTable(
      new Table({
        name: 'user_todo',
        columns: [
          {
            name: 'uid',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'tid',
            type: 'varchar',
            isPrimary: true,
          },
          { name: 'name', type: 'varchar' },
          {
            name: 'createdAt',
            type: 'datetime',
          },
        ],
        foreignKeys: [
          {
            referencedColumnNames: ['id'],
            columnNames: ['uid'],
            referencedTableName: 'user',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user_todo');
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('brand').notNullable()
      table.string('category').notNullable()
      table.string('rating').nullable()
      table.integer('price').notNullable()
      table.integer('stock').nullable()
      table.string('image').nullable()
      table.integer('user_id').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

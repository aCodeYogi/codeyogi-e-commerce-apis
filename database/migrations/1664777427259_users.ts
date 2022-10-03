import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'
  
    public async up() {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').primary().unique().unsigned()
        table.string('email').notNullable().unique()
        table.string("name").notNullable()
        table.string('password').notNullable()
        table.string('age').nullable()
        table.string('gender').nullable()
  
        /**
         * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp('created_at', { useTz: true }).notNullable()
        table.timestamp('updated_at', { useTz: true }).notNullable()
        table.dateTime("deleted_at").defaultTo(null)
      })
    }
  

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

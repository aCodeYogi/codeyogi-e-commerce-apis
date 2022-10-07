import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AuthsSchema extends BaseSchema {
  protected tableName = 'users'

  public up() {
    void this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('full_name').notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public down() {
    void this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('director_name')
      table.string('title')
      table.text('description')
      table.text('image')
      table.boolean('featured')
      table.string('release')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
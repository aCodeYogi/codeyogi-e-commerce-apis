import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public up() {
    void this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title')
      table.text('description')
      table.integer('price')
      table.float('discount_percentage')
      table.float('rating')
      table.integer('stock')
      table.string('brand')
      table.string('category')
      table.string('thumbnail')
      table.json('images')
    })
  }

  public down() {
    void this.schema.dropTable(this.tableName)
  }
}

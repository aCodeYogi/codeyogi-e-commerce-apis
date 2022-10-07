import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public discountPercentage: number

  @column()
  public rating: number

  @column()
  public stock: number

  @column()
  public brand: string

  @column()
  public category: string

  @column()
  public thumbnail: string

  @column()
  public images: string[]
}

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public directorName: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string

  @column()
  public featured: boolean

  @column()
  public release: string
}

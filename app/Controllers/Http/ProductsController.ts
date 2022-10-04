import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import products from 'App/Resourses/ProductsDummyData'


export default class ProductsController {
  public async show({ }: HttpContextContract) {
    return products
  }
}
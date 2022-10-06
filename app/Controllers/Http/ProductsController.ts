import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import products from 'App/Resourses/ProductsDummyData'


export default class ProductsController {
  public async index(ctx: HttpContextContract) {
    const query = ctx.request.qs()
    const page: number = query.page || 1;
    const search: string = query.search || '';
    let searchedProducts = products.filter((item) => {
      return item.category.toLowerCase().includes(search.toLowerCase())
    });
    return searchedProducts.slice((page - 1) * 20, (page * 20))

  }
}
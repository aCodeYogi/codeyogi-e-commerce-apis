import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import products from 'App/Resourses/ProductsDummyData'


export default class ProductsController {
  public async index(ctx: HttpContextContract) {
    const query = ctx.request.qs()
    const page: number = query.page || 1;
    let sortedProducts = products.filter((item) => {
      const title = item.category;
      const search: string = query.search || '';
      return title.toLowerCase().indexOf(search.toLowerCase()) != -1;
    });
    const finalProducts = sortedProducts.filter((_, index) => index >= (page-1)*20 && index < (page * 20));
    return finalProducts
  }
}
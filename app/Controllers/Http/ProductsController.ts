import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import products from 'App/Resourses/ProductsDummyData'


export default class ProductsController {
  public async index(ctx: HttpContextContract) {
    const query = ctx.request.qs();
    const page: number = query.page || 1;
    const search: string = query.search || '';
    const sortBy: string = query.sortBy || '';
    const sortType: string = query.sortType || ''
    let searchedProducts = products.filter((item) => {
      return item.category.toLowerCase().includes(search.toLowerCase());
    });
    if (sortBy.toLowerCase() === "price") {
      if (sortType.toLowerCase() === 'ascending') {
        searchedProducts.sort(function (x, y) {
          return x.price - y.price;
        });
      } else if (sortType.toLowerCase() === 'descending') {
        searchedProducts.sort(function (x, y) {
          return y.price - x.price;
        });
      }
    } else if (sortBy.toLowerCase() === "title") {
      if (sortType.toLowerCase() === 'ascending') {
        searchedProducts.sort(function (x, y) {
          return x.title < y.title ? -1 : 1;
        })
      } else if (sortType.toLowerCase() === 'descending') {
        searchedProducts.sort(function (x, y) {
          return x.title > y.title ? -1 : 1;
        })
      }
    }
    return searchedProducts.slice((page - 1) * 20, (page * 20));
  }
}
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    const { sortBy, sortType, page, search } = request.qs() as {
      sortBy?: string
      sortType?: string
      page?: string
      search?: string
    }
    if (sortType !== 'asc' && sortType !== 'desc' && sortType !== undefined) {
      return response.badRequest('Try again')
    }
    let produsctsQuery = Product.query()
    if (search) {
      produsctsQuery = produsctsQuery.where((query) =>
        query.where('Lower(title)', 'Like', `[%${search.toLowerCase}%]`)
      )
    }
    if (sortBy) {
      produsctsQuery = produsctsQuery.orderBy(sortBy, sortType ? sortType : 'asc')
    }
    const products = produsctsQuery.paginate(page ? +page : 1, 20)
    return products
  }
}

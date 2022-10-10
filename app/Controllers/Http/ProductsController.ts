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
            return response.badRequest('search is invalid')
        }
        let productsQueryBuilder = Product.query()
        if (search) {
            productsQueryBuilder = productsQueryBuilder.whereRaw('LOWER(title) like ?', [
                `%${search.toLowerCase()}%`,
            ])
        }
        if (sortBy) {
            productsQueryBuilder = productsQueryBuilder.orderBy(sortBy, sortType ? sortType : 'asc')
        }
        const products = productsQueryBuilder.paginate(page ? +page : 1, 20)

        return products
    }
}

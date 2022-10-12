import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    const { search, page, sortBy, sortType } = request.qs() as {
      search?: string
      page?: string
      sortBy?: string
      sortType?: string
    }
    const cols = Object.keys(Product.$keys.serializedToColumns.all())

    if (sortBy && !cols.includes(sortBy)) return response.badRequest(`${sortBy} column does not exist in product`)

    let query = Product.query().where((query) => {
      if (search) return query.whereRaw('LOWER(title) like ?', [`%${search.toLowerCase()}%`])
    })

    if (sortBy)
      if (sortType === 'asc' || sortType === 'desc' || sortType === undefined) {
        query = query.orderBy(sortBy, sortType)
      } else {
        return response.badRequest(`${sortType} is non processable!`)
      }

    const products = await query.paginate(page ? +page : 1, 20)
    return products
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()

    const product = await Product.findOrFail(id)
    return product
  }

  public async showByIds({ request }: HttpContextContract) {
    const { ids } = request.qs() as { ids: string }
    const idsArray = (ids || '').split(',').map((id) => +id)

    const sanatisedRequest = await validator.validate({
      schema: schema.create({
        ids: schema.array().members(schema.number()),
      }),
      data: { ids: idsArray },
    })
    const products = await Product.query().whereIn('id', sanatisedRequest.ids)
    return products
  }
}

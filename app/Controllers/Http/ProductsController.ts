import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request }: HttpContextContract) {
    const { search, page, sortBy, sortType } = request.qs() as {
      search?: string
      page?: string
      sortBy?: string
      sortType?: string
    }
    const cols = Object.keys(Product.$keys.serializedToColumns.all())

    const senetisedQs = await validator.validate({
      schema: schema.create({
        sortBy: schema.enum.optional(cols),
        sortType: schema.enum.optional(['asc', 'desc']),
      }),
      data: { sortBy, sortType },
    })

    const products = await Product.query()
      .where((query) => {
        if (search) return query.whereRaw('LOWER(title) like ?', [`%${search.toLowerCase()}%`])
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      .orderBy(senetisedQs.sortBy || 'id', senetisedQs.sortType as any)
      .paginate(page ? +page : 1, 20)

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

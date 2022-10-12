import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product'

export default class CartsController {
  public async index({ auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const carts = await user.related('carts').query().preload('product')

    const response = carts.map((element) => {
      return { product: element.product, quantity: element.quantity }
    })

    return response
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const { data } = await request.validate({
      schema: schema.create({
        data: schema.object().anyMembers(),
      }),
    })

    const isEntryIncorrect = Object.entries(data).find(([key, value]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const isEntryIncorrect = Math.sign(+key) !== 1 && Math.sign(value) !== 1
      return isEntryIncorrect
    })
    if (isEntryIncorrect) {
      return response.badRequest({
        message: 'Requested data not in correct form, make sure to pass correct data!',
      })
    }

    const productsIds = Object.keys(data)
    const products = await Product.query().whereIn('id', productsIds)

    const isAllIdsCorrect = products.length === productsIds.length
    if (!isAllIdsCorrect) {
      const notFoundIds = productsIds.filter((id) => !products.find((obj) => obj.id === +id))
      return response.badRequest({
        message: `${notFoundIds.join(',')} ids not found!`,
      })
    }

    const user = await auth.authenticate()
    const carts = await user.related('carts').createMany(
      Object.entries(data).map(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { quantity: value, product_id: +key }
      })
    )
    return carts
  }
}

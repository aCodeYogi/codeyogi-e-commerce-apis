import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
// import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async signup({ request, auth }: HttpContextContract) {
    const { fullName, email, password } = await request.validate({
      schema: schema.create({
        fullName: schema.string({ trim: true }),
        email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
        password: schema.string({ trim: true }),
      }),
    })

    const user = await User.create({ fullName, email, password })
    const tokenMeta = await auth.use('api').attempt(email, password)
    const token = tokenMeta.type + ' ' + tokenMeta.token

    return { user, token }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = await request.validate({
      schema: schema.create({
        email: schema.string({ trim: true }, [rules.email()]),
        password: schema.string({ trim: true }),
      }),
    })

    try {
      const tokenMeta = await auth.use('api').attempt(email, password)
      const token = tokenMeta.type + ' ' + tokenMeta.token
      // await auth.login(tokenMeta.user)

      return { user: tokenMeta.user, token }
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async me({ auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    return user
  }

  public async signupWithCookie({ auth, request }: HttpContextContract) {
    const { fullName, email, password } = await request.validate({
      schema: schema.create({
        fullName: schema.string({ trim: true }),
        email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
        password: schema.string({ trim: true }),
      }),
    })

    const user = await User.create({ fullName, email, password })
    await auth.use('web').attempt(email, password)
    return user
  }

  public async loginWithCookie({ auth, request }: HttpContextContract) {
    const { email, password } = await request.validate({
      schema: schema.create({
        email: schema.string({ trim: true }, [rules.email()]),
        password: schema.string({ trim: true }),
      }),
    })

    await auth.use('web').attempt(email, password)
    return auth.user
  }

  public async meWithCookie({ auth }: HttpContextContract) {
    const user = await auth.use('web').authenticate()
    return user
  }
}

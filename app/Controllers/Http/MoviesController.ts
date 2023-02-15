import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index() {
    const movies = await Movie.all()
    return movies
  }

  public async show({ request }: HttpContextContract) {
    const { id } = request.params()
    const movie = await Movie.findOrFail(id)
    return movie
  }
}

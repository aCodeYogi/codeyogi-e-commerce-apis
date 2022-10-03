import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async login({request}: HttpContextContract) {
        const email = "yogi@gmail.com" 
        const password = "CodeYogi" 
        if(request.input("email") == email && request.input("password") == password){
          return "login successfully"
        }
        else{
        return "login failed"
        }
      }
}

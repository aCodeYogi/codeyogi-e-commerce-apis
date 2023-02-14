/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'j
|
*/

import Route from '@ioc:Adonis/Core/Route'

//testing
Route.get('/', () => {
  return { hello: 'world' }
})

//Auth
Route.post('signup', 'AuthController.signup')
Route.post('signupWithCookie', 'AuthController.signupWithCookie')
Route.post('login', 'AuthController.login')
Route.get('me', 'AuthController.me')
Route.post('loginWithCookie', 'AuthController.loginWithCookie')
Route.get('meWithCookie', 'AuthController.meWithCookie')

//Produts
Route.get('/products', 'ProductsController.index')
Route.get('/product/:id', 'ProductsController.show')
Route.get('/products/bulk', 'ProductsController.showByIds')

//Cart
Route.group(() => {
  Route.get('/carts', 'CartsController.index')
  Route.post('/carts', 'CartsController.store')
}).middleware('auth')

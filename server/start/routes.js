'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(
  ()=> {
    Route.get('solutions','solutionsController.index')

    Route.get('items','itemsController.index')

    //backend exercices
    Route.get('exercice/:id','solutionsController.show')
    Route.post('exercice/add','solutionsController.store').as('solution.store')
    Route.put('exercice/:id','solutionsController.update')
    Route.delete('exercice/:id','solutionsController.delete')
    Route.any('*', ({ view }) => view.render('app'))
  }
).prefix('api')

/*
    Authentification
 */

  Route.get('users', 'AuthController.getUser')
  Route.get('auth/register', 'AuthController.register')
  Route.post('auth/register', 'AuthController.register')
  Route.get('auth/login', 'AuthController.login')
  Route.post('auth/login', 'AuthController.login')

//accueil
//Route.get('/', 'accueilController.index')
Route.any('*', ({ view }) => view.render('app'))


Route.get('auth/google', 'AuthController.redirect').as('social.login')
Route.get('authenticated/google', 'AuthController.handleCallback').as('social.login.callback')
Route.post('/files', 'FileController.upload')

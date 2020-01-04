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
    Route.get('exercices','exercicesController.index')
    Route.get('items','itemsController.index')
    Route.get('theories','theoriesController.index')
    Route.get('users','usersController.index')
    //backend exercices
    Route.get('exercice/:id','exercicesController.show')
    Route.post('exercice/add','exercicesController.store').as('exercice.store')
    Route.put('exercice/:id','exercicesController.update')
    Route.delete('exercice/:id','exercicesController.delete')
    //backend solution
    Route.get('solution/:id','solutionsController.show')
    Route.post('solution/add','solutionsController.store').as('solution.store')
    Route.put('solution/:id','solutionsController.update')
    Route.delete('solution/:id','solutionsController.delete')
    //backend utilisateurs(user redux)
    Route.get('user/:id','utilisateursController.show')
    Route.post('user/add','utilisateursController.store').as('utilisateur.store')
    Route.put('user/:id','utilisateursController.update')
    Route.delete('user/:id','utilisateursController.delete')
    //backend theories
    Route.get('theorie/:id','theoriesController.show')
    Route.post('theorie/add','theoriesController.store').as('theorie.store')
    Route.put('theorie/:id','theoriesController.update')
    Route.delete('theorie/:id','theoriesController.delete')
    //auth admin
  //  Route.get('users', 'AuthController.getUser')
    Route.get('auth/register', 'AuthController.register')
    Route.post('auth/register', 'AuthController.register')
    Route.get('auth/login', 'AuthController.login')
    Route.post('auth/login', 'AuthController.login')
        Route.any('*', ({ view }) => view.render('app'))

  }
).prefix('api')



    Route.any('*', ({ view }) => view.render('app'))


Route.get('auth/google', 'AuthController.redirect').as('social.login')
Route.get('authenticated/google', 'AuthController.handleCallback').as('social.login.callback')
Route.post('/files', 'FileController.upload')

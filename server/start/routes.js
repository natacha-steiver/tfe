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
    Route.get('users','utilisateursController.index')
    Route.get('admins','administrateursController.index')
    //backend exercices
    Route.get('exercice/:id','exercicesController.show')
    Route.post('exercice/add','exercicesController.store').as('exercice.store').middleware('auth:admin')
    Route.put('exercice/:id','exercicesController.update').middleware('auth:admin')
    Route.delete('exercice/:id','exercicesController.delete').middleware('auth:admin')
    //backend solution
    Route.get('solution/:id','solutionsController.show')
    Route.post('solution/add','solutionsController.store').as('solution.store')
    Route.put('solution/:id','solutionsController.update').middleware('auth:admin')
    Route.delete('solution/:id','solutionsController.delete').middleware('auth:admin')
    //backend utilisateurs(user redux)
    // /users register all
    // register
    //Route.post('user/add','utilisateursController.register').as('utilisateur.register')
    Route.post('user/register','utilisateursController.register').as('utilisateur.register')
    Route.get('user/delete/token', 'utilisateursController.deleteToken')
    Route.get('user/list/token', 'utilisateursController.listToken')
    Route.get('user/:id','utilisateursController.register') //profil

    Route.put('user/:id','utilisateursController.updateUser').middleware('auth:user')
    Route.delete('user/:id','utilisateursController.deleteUser').middleware('auth:user')
    //login
    Route.post('user/login','utilisateursController.login').as('utilisateur.login')
    Route.get('user/login','utilisateursController.login') //profil
    //backend theories
    Route.get('theorie/:id','theoriesController.show').middleware('auth:admin')
    Route.post('theorie/add','theoriesController.store').as('theorie.store').middleware('auth:admin')
    Route.put('theorie/:id','theoriesController.update').middleware('auth:admin')
    Route.delete('theorie/:id','theoriesController.delete').middleware('auth:admin')
    //auth admin
  //  Route.get('users', 'administrateursController.getUser')

      //  Route.any('*', ({ view }) => view.render('app'))
      Route.get('auth/list/token', 'administrateursController.listToken')
      Route.get('auth/delete/token', 'administrateursController.deleteToken')
      Route.get('auth/register', 'administrateursController.register')
      Route.post('auth/register', 'administrateursController.register').as('administrateur.register')
      Route.get('auth/login', 'administrateursController.login')
      Route.post('auth/login', 'administrateursController.login').as('administrateur.login')
  }
).prefix('api')



    Route.any('*', ({ view }) => view.render('app'))


Route.get('auth/google', 'administrateursController.redirect').as('social.login')
Route.get('authenticated/google', 'administrateursController.handleCallback').as('social.login.callback')
Route.post('/files', 'FileController.upload')

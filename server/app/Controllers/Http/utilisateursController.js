'use strict'
const Utilisateur = use('App/Models/Utilisateur');
class UtilisateursController {

//add and get user in DB
        async register({request, auth, response}) {

          let user = await Utilisateur.create(request.all())

          //generate token for user;
          let token = await auth.generate(user)

          Object.assign(user, token)

          return response.json(user)
        }

        async login({request, auth, response}) {

          let {email, password} = request.all();

          try {
            if (await auth.attempt(email, password)) {
              let user = await Utilisateur.findBy('email', email)
              let token = await auth.generate(user)

              Object.assign(user, token)

              //return response.json(user)
              return response.json({ user:user})

            }


          }
          catch (e) {
            console.log(e)
            return response.json({message: 'You are not registered!'})
          }
        }

        //get all users
        async getUser({request, auth, response}){
            return response.json({verif: auth.check(),
            user:auth.getUser()
            })
          }

        //delete user/token
        async deleteUser({request, auth, response}){
          const refreshToken = '' // get it from user
/*
          await auth
            .authenticator('jwt')
            .revokeTokens([refreshToken], true)
*/
            return response.json({verif: auth.check(),
            user:auth.getUser()
            })
          }


          //delete user/token
          async updateUser({request, auth, response}){
            const refreshToken = '' // get it from user

              return response.json({verif: auth.check(),
              user:auth.getUser()
              })
            }

}

module.exports = UtilisateursController

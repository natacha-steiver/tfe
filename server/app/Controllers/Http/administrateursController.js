'use strict'
const Administrateur = use('App/Models/Administrateur');
class AdministrateursController {
  async listToken({request, auth, response}) {
let tokens=  await auth.authenticator('admin').listTokens()
  return response.json(tokens)
   }
   async deleteToken({request, auth, response}) {
     await auth
       .authenticator('admin')
       .revokeTokens()
    }
//add and get admin in DB
        async register({request, auth, response}) {

          let user = await Administrateur.create(request.all())

          //generate token for admin;
          let token = await auth.authenticator('admin').generate(user)

          Object.assign(user, token)
  auth.authenticator('admin').withRefreshToken()
          return response.json(user)


        }

        async login({request, auth, response}) {

          let {email, password} = request.all();

          try {
            if (await auth.authenticator('admin').attempt(email, password)) {
              let user = await Administrateur.findBy('email', email)
              let token = await auth.authenticator('admin').generate(user)

              Object.assign(user, token)
  auth.authenticator('admin').withRefreshToken()
              //return response.json(admin)

              return response.json(user)

            }


          }
          catch (e) {
            console.log(e)
            return response.json({message: 'You are not registered!'})
            alert('session expirée, veuillez vous reconnecter')
          }
        }

        //get all admins
        async index({response}){

            let user = await Administrateur.all()
            return response.json(user)
          }


        //delete admin/token
        async deleteadmin({request, auth, response,params}){
          const user= await Administrateur.where({_id:params.id}).delete({id:params.id})

          return response.status(200).json({

            id: params.id,



          })
          }


          //delete admin/token
          async updateadmin({params,request, auth, response}){

                    try {
                      const adminEmail = request.post('email')
                      const adminPassword = request.post('password')


                      const admin= await Administrateur.where({_id:params.id}).update({id:params.id,email:adminEmail.email,password:adminPassword.password})
                      admin.email = adminEmail.email
                      admin.password =adminPassword.password
                  console.log(request+"requete")
                  return response.status(200).json({id:params.id,email:adminEmail.email,password:adminPassword.password})

                  } catch (e) {
                    console.log(e)
                    return response.json({message: 'You are not authorized to perform this action'})
                  }
            }

}

module.exports = AdministrateursController

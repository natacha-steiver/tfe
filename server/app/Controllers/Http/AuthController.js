'use strict'
const User = use('App/Models/User');
class AuthController {
  async redirect({ally}) {
    await ally.driver('google').scope(['profile',      'email','https://www.googleapis.com/auth/drive']).redirect()
  }


  async handleCallback({params, ally, auth, response, session}) {
    const provider = 'google'
  try {
    const userData = await ally.driver(provider).getUser();
      session.put('user', userData.getName())
      session.put('accessToken', userData.getAccessToken())
      response.redirect('/')
  }
  catch (error) {
  console.log(error);
  }
  }



        async register({request, auth, response}) {

          let user = await User.create(request.all())

          //generate token for user;
          let token = await auth.generate(user)

          Object.assign(user, token)

          return response.json(user)
        }

        async login({request, auth, response}) {

          let {email, password} = request.all();

          try {
            if (await auth.attempt(email, password)) {
              let user = await User.findBy('email', email)
              let token = await auth.generate(user)

              Object.assign(user, token)

              return response.json(user)

            }


          }
          catch (e) {
            console.log(e)
            return response.json({message: 'You are not registered!'})
          }
        }



}



module.exports = AuthController

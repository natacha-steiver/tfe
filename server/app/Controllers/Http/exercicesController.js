'use strict'

const Exercice = use('App/Models/exercices')
class exercicesController {
async index({response}){

    let exercice = await Exercice.all()
    return response.json(exercice)
  }


  async store({request,auth,response}){

    const exType = request.post('type')
    const exEnnonce = request.post('ennonce')

    const exercice = new Exercice()
    exercice.type = exType.type
    exercice.ennonce =exEnnonce.ennonce
const exerciceLast=  await Exercice
    .fetch()
//db.tfe.getCollection("solutions").find().sort({"_id":-1}).limit(1)
    await exercice.save()
    console.log(response)
    return response.status(201).json({all:exerciceLast})
  }

  async show ({params,response}) {
    const exercice= await Exercice.where({_id:params.id}).fetch()

    return response.json(exercice)
  }

  async update ({params,response,request}) {



        try {
          const exType = request.post('type')
          const exEnnonce = request.post('ennonce')


          const exercice= await Exercice.where({_id:params.id}).update({id:params.id,type:exType.type,ennonce:exEnnonce.ennonce})
          exercice.type = exType.type
          exercice.ennonce =exEnnonce.ennonce
      console.log(request+"requete")
        return response.status(200).json({id:params.id,type:exType.type,ennonce:exEnnonce.ennonce})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const exercice= await Exercice.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = exercicesController

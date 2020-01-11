'use strict'
const Theorie = use('App/Models/theories');
class theoriesController {
async index({response}){

  try{
    let theorie = await Theorie.all()

    return response.json(theorie)

  }

    catch (e) {

      console.log(e)

      return response.json({message: 'You are not authorized to perform this action'})
    }
  }


  async store({request,auth,response}){

    const theoTitre= request.post('titre')
    const theoTexte = request.post('texte')
    const theoImage= request.post('image')
    const theoVideo = request.post('video')
    const theoLangage = request.post('langage')

    const theorie = new Theorie()
    theorie.titre = theoTitre.titre
    theorie.texte = theoTexte.texte
    theorie.image = theoImage.image
    theorie.video = theoVideo.video
    theorie.langage = theoLangage.langage
const theorieLast=  await Theorie
    .fetch()

    await theorie.save()
    console.log(response)
    return response.status(201).json({all:theorieLast})
  }

  async show ({params,response}) {
    const theorie= await Theorie.where({_id:params.id}).fetch()

    return response.json(theorie)
  }

  async update ({params,response,request}) {



        try {

              const theoTitre= request.post('titre')
              const theoTexte = request.post('texte')
              const theoImage= request.post('image')
              const theoVideo = request.post('video')
              const theoLangage = request.post('langage')



          const theorie= await Theorie.where({_id:params.id}).update({id:params.id,titre:theoTitre.titre,texte:theoTexte,image:theoImage,video:theoVideo,langage:theoLangage})
          theorie.titre = theoTitre.titre
          theorie.texte = theoTexte.texte
          theorie.image = theoImage.image
          theorie.video = theoVideo.video
          theorie.langage = theoLangage.langage
      console.log(request+"requete")
        return response.status(200).json({id:params.id,titre:theoTitre.titre,texte:theoTexte,image:theoImage,video:theoVideo,langage:theoLangage})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const theorie= await Theorie.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = theoriesController

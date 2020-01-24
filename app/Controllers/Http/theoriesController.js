'use strict'
const Theorie = use('App/Models/theories');
const CloudinaryService = use('App/Services/CloudinaryService');
const Helpers = use('Helpers')
const fs = require('fs');
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
      //const theoImage= request.post('image')
      const theoVideo = request.post('video')
      const theoLangage = request.post('langage')

  const file = request.file('image', {
     types: ['image'],
     size: '2mb'
   })
   const video = request.file('video', {
      types: ['video'],
      size: '20mb'
    })




if(file){
  if(file._files && file._files.length>1){
    file._files.forEach((el,i)=>{


if (fs.existsSync("public/images/".concat(el.clientName))) {
 console.log("exist")

}else{
  file.moveAll(Helpers.publicPath('images'), {
 name: file._files.clientName,
 overwrite: true
 })

}
    })
  }else if(file){
    if (fs.existsSync("public/images/".concat(file.clientName))) {
      console.log("exist")

    }else{
       file.move(Helpers.publicPath('images'), {
      name: file.clientName,
      overwrite: true
      })

    }
  }
}



if(video){


              if(video._files && video._files.length>1){
                  video._files.forEach((el,i)=>{


                 if (fs.existsSync("public/videos/".concat(el.clientName))) {
                   console.log("exist")
                 }else{
                    video.moveAll(Helpers.publicPath('videos'), {
                   name: video.clientName,
                   overwrite: true
                   })
                 }
                  })
                }else if(video){
                  if (fs.existsSync("public/videos/".concat(video.clientName))) {
                    console.log("exist")
                  }else{
                     video.move(Helpers.publicPath('videos'), {
                    name: video.clientName,
                    overwrite: true
                    })
                  }
                }
}






      const theorie = new Theorie()

    //  const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(file.tmpPath, {folder: 'images'});
    // theorie.image = cloudinaryResponse.secure_url;
      theorie.titre = theoTitre.titre
      theorie.texte = theoTexte.texte
      theorie.image = file
      theorie.video = video
      theorie.langage = theoLangage.langage
  const theorieLast=  await Theorie
      .fetch()

      await theorie.save()
      console.log(response)
      return response.status(201).json({all:theorieLast,file:file,video:video})

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

'use strict'

const Solution = use('App/Models/solutions')
class solutionsController {
async index({response}){

    let solution = await Solution.all()
    return response.json(solution)
  }


  async store({request,response}){
    const exType = request.post('type')
    const exSolution = request.post('solution')

    const exercice = new Solution()
    exercice.type = exType.type
    exercice.solution =exSolution.solution

    await exercice.save()
    return response.status(201).json(exercice.type)
  }

  async show ({params,response}) {
    const solution= await Solution.where({_id:params.id}).fetch()

    return response.json(solution)
  }

  async update ({params,response,request}) {
    const exType = request.post('type')
    const exSolution = request.post('solution')


    const exercice= await Solution.where({_id:params.id}).update({id:params.id,type:exType.type,solution:exSolution.solution})
    exercice.type = exType.type
    exercice.solution =exSolution.solution

  return response.status(200).json({
  type:'js'

  })
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const exercice= await Solution.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      idec: JSON.stringify(params.id),



    })
  }


  }

module.exports = solutionsController

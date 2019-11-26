'use strict'

const solutions = use('App/Models/solutions')
class solutionsController {
async index({response}){

    let solution = await solutions.all()
    return response.json(solution)
  }



  }

module.exports = solutionsController

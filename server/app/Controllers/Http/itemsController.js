'use strict'

const items = use('App/Models/items')
class itemsController {
async index({response}){

    let item = await items.all()
    return response.json(item)
  }



  }

module.exports = itemsController

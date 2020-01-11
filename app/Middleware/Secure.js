'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Secure {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
   async handle({ request }, next) {
     // call next to advance the request
  const tokenSecure = request.cookie('tokenTxt')
  localStorage.setItem('old',"jj")


     await next();
   }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = Secure

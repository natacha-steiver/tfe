import axios from 'axios';

export const getList = ()=>{
  return axios

    .get('api/solutions',{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{

      var data = res.data


      return data
    })
}


export const getMenu = ()=>{
  return axios

    .get('api/items',{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{

      var data = res.data


      return data
    })
}

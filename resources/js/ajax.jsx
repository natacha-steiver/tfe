import axios from 'axios';
axios.defaults.withCredentials = true
import store,{history} from './redux/store'
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




export const showOneEx = (id)=>{
/*
return axios
  .get(`api/exercice/${id}`,{
    headers:{'Content-Type':'application/json'}
      })
  .then(res =>{
    var data = res.data


    return data
  })
 */
}

export const deleteEx = (id)=>{
/*
return axios
  .delete(`api/exercice/${id}`,{id:id},{
    headers:{'Content-Type':'application/json','Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlNWRiODM1NzUxNTQ3MjQ4ZTUwZmIiLCJpYXQiOjE1Nzc5OTk4MDAsImV4cCI6MTU3ODAwMTYwMH0.I2dRrjS3EVhDP0Og8aqW4mdsLV5oJz2YUlb4SpU3UAo'}
  })
  .then(res =>{
  console.log(res)
  })
 */
}

export const storeEx = (id,solution,type)=>{
/*  return axios
    .post(`api/exercice/add`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
    return axios
      .post(`api/exercice/add`,{
        headers:{'Content-Type':'application/json'}
          })
      .then(res =>{
      console.log(res)
      })
 */
}



export const updateEx = (id,solution,type)=>{
/*
return axios
  .put(`api/exercice/${id}`,{id:id,solution: solution,type:type},{
    headers:{'Content-Type':'application/json','Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlNWRiODM1NzUxNTQ3MjQ4ZTUwZmIiLCJpYXQiOjE1Nzc5OTk4MDAsImV4cCI6MTU3ODAwMTYwMH0.I2dRrjS3EVhDP0Og8aqW4mdsLV5oJz2YUlb4SpU3UAo'}
      })
  .then(res =>{
  console.log(res)
  })
 */
}

//------------

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



//------------------AUTH--------------
export const registerUser = (email,password)=>{

return axios
  .post(`api/user/register`,{email:email,password:password},{
    headers:{'Content-Type':'application/json'}
  // headers:{'Content-Type':'application/json'}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlMWFlNWIyYTA3OGY2MzBlZTQ2YzMiLCJpYXQiOjE1Nzc5ODU2NTF9.bZVYTE2NTn9Djo_UulfHZKBsLhIKtsYZ2tzge5H9ehM
      })
  .then(res =>{
  console.log(res)

  })

}


export const register = (email,password)=>{

return axios
  .post(`api/auth/register`,{email:email,password:password},{
    headers:{'Content-Type':'application/json'}
  // headers:{'Content-Type':'application/json'}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlMWFlNWIyYTA3OGY2MzBlZTQ2YzMiLCJpYXQiOjE1Nzc5ODU2NTF9.bZVYTE2NTn9Djo_UulfHZKBsLhIKtsYZ2tzge5H9ehM
      })
  .then(res =>{
  console.log(res)

  })

}
axios.defaults.xsrfHeaderName = "tokenTxt";
axios.defaults.xsrfCookieName= "tokenTxt";
let axiosInstances = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 50000,
});



export const getUser = ()=>{
  return axios
    .get(`api/users`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
}

export const deleteUser = (id)=>{

return axios
  .delete(`api/user/${id}`,{id:id},{
    headers:{'Content-Type':'application/json'}
  })
  .then(res =>{
  console.log(res)
  })

}


export const updateUser = (id,email,password)=>{

return axios
  .delete(`api/user/${id}`,{id:id,email: email,password:password},{
    headers:{'Content-Type':'application/json'}
  })
  .then(res =>{
  console.log(res)
  })

}
//--------------Admin------------------------

export const getAdmin = ()=>{
  return axios
    .get(`api/admins`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
}


export const deleteAdmin = (id)=>{

return axios
  .delete(`api/auth/${id}`,{id:id},{
    headers:{'Content-Type':'application/json'}
  })
  .then(res =>{
  console.log(res)
  })

}


export const updateAdmin = (id,email,password)=>{

return axios
  .delete(`api/auth/${id}`,{id:id,email: email,password:password},{
    headers:{'Content-Type':'application/json'}
  })
  .then(res =>{
  console.log(res)
  })

}

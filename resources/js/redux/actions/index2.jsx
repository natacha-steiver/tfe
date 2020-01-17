// src/js/actions/index.js


import {
  ADD_SOLUTION,
  DELETE_SOLUTION,
  FETCH_SOLUTION,
  UPDATE_SOLUTION,
  ADD_EXERCICE,
  DELETE_EXERCICE,
  FETCH_EXERCICE,
  UPDATE_EXERCICE,
  ADD_THEORIE,
  DELETE_THEORIE,
  FETCH_THEORIE,
  UPDATE_THEORIE,
  POST_LOGIN,
  GET_LOGIN,
  POST_REGISTER,
  GET_REGISTER,
  ADD_USER,
  DELETE_USER,
  FETCH_USER ,
  UPDATE_USER,
  POST_LOGIN_USER,
  GET_LOGIN_USER


 } from  "../constantes/index";

import axios from 'axios';
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTEyM2E0YWQzMGFhZmE4MjFmOWEzMGIiLCJpYXQiOjE1NzgyNTI4NzR9.P4ceTZ_QdYavhgF2Ik_xY9ZD63HosjdnqSC3CcWrKPc

//const token = JSON.parse(sessionStorage.getItem('user-token'));
const token2 =  JSON.parse(sessionStorage.getItem('user-token'));
//undefined
const token=  JSON.parse(sessionStorage.getItem('token5'));
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
//axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"



<<<<<<< HEAD
========
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "tokenTxt";
axios.defaults.xsrfCookieName = "tokenTxt";

/*

function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  var getting = browser.cookies.get({
    url: tabs[0].url,
    name: "tokenTxt"
  });
  getting.then(logCookie);
}

var getActive = browser.tabs.query({
  active: true,
  currentWindow: true
});
getActive.then(getCookie);
axios.defaults.headers.common.Authorization = getting.then(logCookie);

 */
        // This means that there's a JWT so someone must be logged in.

      //  axios.defaults.headers.common.Authorization = document.cookie

//axios.defaults.headers.common['Authorization']  =`Bearer ${localStorage.getItem("tokenn")}`
let axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 50000,
});
axiosInstance.interceptors.request.use(
  config => {
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx

if(config.headers.tokenTxt!=="undefined"){
  config.headers['Authorization'] = config.headers.tokenTxt

}
  return config;
  },
  error => Promise.reject(error)
);
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
=======

>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
//------------------------------------------SOLUTIONS DES EXERCICES-------------------------------
//-------------------ADD-------------------
export const createSolution = ({solution,type }) => {
  return (dispatch) => {
    return axios.post(`api/solution/add`, {solution,type},{
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
      headers:{'Content-Type':'application/json','Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"}
    })
========
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })




>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
      .then(response => {

         dispatch(createSolutionSuccess(response.data.solution))

      })
      .catch(error => {
        console.log(error)
=======
      headers:{'Content-Type':'application/json','Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"}
    })
      .then(response => {

/*
dispatch({
  type: ADD_SOLUTION,
  payload: {
    type: response.data.type,
    solution: response.data.solution,
    date: new Date().toLocaleDateString(),
    _id:"jjjj46554"
  }
});
 */
        dispatch(createSolutionSuccess(response.data))
      })
      .catch(error => {
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
        throw(error);
      });
  };
};

export const createSolutionSuccess =  (data) => {
<<<<<<< HEAD

=======
  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
  return {
    type: ADD_SOLUTION,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      solution: data.all.map(item=>(
          item.solution
        )).toString(),
      type:data.all.map(item=>(
          item.type
        )).toString(),
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateSolution = (id,solution,type)=>{



    return (dispatch) => {
      return axios.put(`api/solution/${id}`,{id:id,solution: solution,type:type},{
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
        headers:{'Content-Type':'application/json'}
========
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
        headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateSolutionSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateSolutionSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_SOLUTION,
    payload: {
      _id: data.id,
      solution: data.solution,
      type: data.type,
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteSolutionSuccess = _id => {
  return {
    type: DELETE_SOLUTION,
    payload: {
      _id
    }
  }
}

export const deleteSolution = id => {
  return (dispatch) => {
    return axios.delete(`api/solution/${id}`,{id:id},{
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
      headers:{'Content-Type':'application/json'}
========
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
      headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
    }).then(response => {
        dispatch(deleteSolutionSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchSolutions = (solutions) => {
  return {
    type: FETCH_SOLUTION,
    solutions
  }
};

<<<<<<< HEAD
//"Authorization":"Bearer "+readCookie('tokenTxt').split('%')
export const fetchAllSolutions = () => {
  return (dispatch) => {
    return axios.get('api/solutions',{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })

      .then(res => {
        dispatch(fetchSolutions(res.data))
      })
      .catch((error,res)=> {
//error 401

//  console.log(res.config.header)

=======
export const fetchAllSolutions = () => {
  return (dispatch) => {
    return axios.get('api/solutions',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
        dispatch(fetchSolutions(response.data))
      })
      .catch(error => {
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
        throw(error);
      });
  };
};


//------------------------------------------EXERCICES-------------------------------
//-------------------ADD-------------------
<<<<<<< HEAD
export const createExercice = ({ennonce,type,titre }) => {
  return (dispatch) => {
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
    return axios.post(`api/exercice/add`, {ennonce,type},{
      headers:{'Content-Type':'application/json'}
========
    return axios.post(`api/exercice/add`, {ennonce,type,titre},{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
export const createExercice = ({ennonce,type }) => {
  return (dispatch) => {
    return axios.post(`api/exercice/add`, {ennonce,type},{
      headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
    })
      .then(response => {

        dispatch(createExerciceSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createExerciceSuccess =  (data) => {
  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')
<<<<<<< HEAD



=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
  return {
    type: ADD_EXERCICE,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      ennonce: data.all.map(item=>(
          item.ennonce
        )).toString(),
      type:data.all.map(item=>(
          item.type
        )).toString(),
<<<<<<< HEAD
      titre:data.all.map(item=>(
            item.titre
          )).toString(),
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
<<<<<<< HEAD
export const updateExercice = (id,ennonce,type,titre)=>{
=======
export const updateExercice = (id,ennonce,type)=>{
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261



    return (dispatch) => {
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
      return axios.put(`api/exercice/${id}`,{id:id,ennonce: ennonce,type:type},{
        headers:{'Content-Type':'application/json'}
========
      return axios.put(`api/exercice/${id}`,{id:id,ennonce: ennonce,type:type,titre:titre},{
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
      return axios.put(`api/exercice/${id}`,{id:id,ennonce: ennonce,type:type},{
        headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateExerciceSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateExerciceSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_EXERCICE,
    payload: {
      _id: data.id,
      ennonce: data.ennonce,
      type: data.type,
<<<<<<< HEAD
      titre: data.titre,
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteExerciceSuccess = _id => {
  return {
    type: DELETE_EXERCICE,
    payload: {
      _id
    }
  }
}

export const deleteExercice = id => {
  return (dispatch) => {
    return axios.delete(`api/exercice/${id}`,{id:id},{
<<<<<<< HEAD
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
=======
      headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
    }).then(response => {
        dispatch(deleteExerciceSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchExercices = (exercices) => {
  return {
    type: FETCH_EXERCICE,
    exercices
  }
};

export const fetchAllExercices = () => {
  return (dispatch) => {
    return axios.get('api/exercices',{
<<<<<<< HEAD
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
=======
      headers:{'Content-Type':'application/json'}
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
        })
      .then(response => {
        dispatch(fetchExercices(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
//----------------------------------AUTHENTIFICATION--------------------------------------------

//POST_REGISTER
export const createRegister = ({email,password}) => {
  return (dispatch) => {
    return axios.post(`api/auth/register`, {email,password})
      .then(response => {
        console.log(response)
        sessionStorage.setItem('createRegister','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')
alert('jkj')
//undefined? alors que user2 fonctionne
 //sessionStorage.setItem('token8',response.data.token)
        dispatch(createRegisterSuccess(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createRegisterSuccess =  (data) => {
  console.log(data.user+"testAddRegister")

  return {
    type: POST_REGISTER,
    payload: {
      _id: data._id,
      email: data.email,
      password:data.password,
      token:data.token


    }
  }
};
//GET_REGISTER
export const getRegister = (authentifications) => {
  return {
    type: GET_REGISTER,
    authentifications
  }
};

export const getRegisters = () => {
  return (dispatch) => {
    return axios.get('api/admins')
      .then(response => {
              console.log(response.data+"getRegister")

              //_id(user)+type+token
        dispatch(getRegister(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



//POST_LOGIN
export const createLogin = ({email,password}) => {
  return (dispatch) => {
    return axios.post(`api/auth/login`, {email,password})
      .then(response => {
                console.log(response)

sessionStorage.setItem('createLogin','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')

// sessionStorage.setItem('token5',response.data.token)
              //  const data={type:"bearer",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"}
          //  sessionStorage.setItem('user-token',data)

                //sessionStorage.setItem('user-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')
        dispatch(createLoginSuccess(response.data))
  alert('createLogin')
      })
      .catch(error => {
          alert('error')
        throw(error);
      });
  };
};

export const createLoginSuccess =  (data) => {
  console.log(data.user+"testAddLogin")

  return {
    type: POST_LOGIN,
    payload: {
      _id: data._id,
      email: data.email,
      password:data.password,
      token:data.token
    }
  }
};
//GET_LOGIN
export const getLogin = (authentifications) => {
  return {
    type: GET_LOGIN,
    authentifications
  }
};

export const getLogins = () => {
  return (dispatch) => {
    return axios.get('api/auth/login')
      .then(response => {
              console.log(response.data+"getLogin")
        dispatch(getLogin(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
<<<<<<< HEAD
========

>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx

//------------------------------------------THEORIES-------------------------------
//-------------------ADD-------------------
export const createTheorie = ({titre,texte,image,video,langage }) => {
  return (dispatch) => {
    return axios.post(`api/theorie/add`, {titre,texte,image,video,langage })
      .then(response => {

=======

//------------------------------------------THEORIES-------------------------------
//-------------------ADD-------------------
export const createTheorie = ({titre,texte,image,video }) => {
  return (dispatch) => {
    return axios.post(`api/theorie/add`, {titre,texte,image,video })
      .then(response => {

/*
dispatch({
  type: ADD_SOLUTION,
  payload: {
    type: response.data.type,
    solution: response.data.solution,
    date: new Date().toLocaleDateString(),
    _id:"jjjj46554"
  }
});
 */
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
        dispatch(createTheorieSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createTheorieSuccess =  (data) => {
  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')
  return {
    type: ADD_THEORIE,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      titre: data.all.map(item=>(
          item.titre
        )).toString(),
      texte:data.all.map(item=>(
          item.texte
        )).toString(),
      image:data.all.map(item=>(
            item.image
          )).toString(),
      video:data.all.map(item=>(
              item.video
            )).toString(),
<<<<<<< HEAD
      langage:data.all.map(item=>(
                    item.langage
                  )).toString(),
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
export const updateTheorie = (id,titre,texte,image,video )=>{
========
export const updateTheorie = (id,titre,texte,image,video,langage )=>{
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
export const updateTheorie = (id,titre,texte,image,video )=>{
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261



    return (dispatch) => {
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
      return axios.put(`api/theorie/${id}`,{id:id,titre: titre,texte:texte,image:image,video:video})
========
      return axios.put(`api/theorie/${id}`,{id:id,titre: titre,texte:texte,image:image,video:video,langage:langage},{
        headers:{"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')
      }})
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
      return axios.put(`api/theorie/${id}`,{id:id,titre: titre,texte:texte,image:image,video:video})
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateTheorieSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateTheorieSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_THEORIE,
    payload: {
      _id: data.id,
      titre: data.titre,
      texte: data.texte,
      image:data.image,
      video:data.video,
<<<<<<< HEAD
      langage:data.langage,
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteTheorieSuccess = _id => {
  return {
    type: DELETE_THEORIE,
    payload: {
      _id
    }
  }
}

export const deleteTheorie = id => {
  return (dispatch) => {
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
    return axios.delete(`api/theorie/${id}`,{id:id})
========
    return axios.delete(`api/theorie/${id}`,{id:id},{headers:{
    "Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}})
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
=======
    return axios.delete(`api/theorie/${id}`,{id:id})
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
    .then(response => {
        dispatch(deleteTheorieSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchTheories = (theories) => {
  return {
    type: FETCH_THEORIE,
    theories
  }
};

export const fetchAllTheories = () => {
  return (dispatch) => {
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/redux/actions/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
    return axios.get('api/theories')
      .then(response => {
        dispatch(fetchTheories(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};




//------------------------------------------UTILISATEURS-------------------------------
//-------------------ADD-------------------

//POST_REGISTER
export const createRegisterUser = ({email,password}) => {
  return (dispatch) => {
    return axios.post(`api/user/register`, {email,password})
      .then(response => {
console.log(response)
//ok fonctionne
//  sessionStorage.setItem('user2',response.data.token)
  sessionStorage.setItem('createRegisterUser','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')

       dispatch(createRegisterUserSuccess(response.data))


      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createRegisterUserSuccess =  (data) => {
  console.log(data)

  return {
    type: ADD_USER,
    payload: {
      _id:data._id,
      email: data.email,
      password:data.password,

    }
  }
};
//GET_REGISTER
export const fetchUsers= (users) => {
  return {
    type: FETCH_USER,
    users
  }
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get('api/users')
      .then(response => {

        dispatch(fetchUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



//POST_LOGIN
export const createLoginUser = ({email,password}) => {
  return (dispatch) => {
    return axios.post(`api/user/login`, {email,password})
      .then(response => {
        console.log(response)
    // sessionStorage.setItem('token7',"response.data")
    sessionStorage.setItem('createLoginUser','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')
alert('createLoginUser')
       //const data= JSON.stringify(response)

                      //  const data={type:"bearer",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"}
                  //  sessionStorage.setItem('user-token',data)
      //sessionStorage.setItem('user-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDE5NjEsImV4cCI6MTU3ODQwMzc2MX0._TBPJpKeOcDx5kEu_aKVwm8kOZXuOiEtIU2rSF796VE')
      //  axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTE0NzM1ZGYyNTAxNDA2NmI1ZDU1OTUiLCJpYXQiOjE1Nzg0MDEyMzUsImV4cCI6MTU3ODQwMzAzNX0.zl2-8OFR8AhsUUMxhH5Ivr8GcZAQgHw94I43a2-UB-Q"
        dispatch(createLoginUserSuccess(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createLoginUserSuccess =  (data) => {
  console.log(data.user+"testAddLogin")

  return {
    type: POST_LOGIN_USER,
    payload: {
      _id: data._id,
      email: data.email,
      password:data.password,
      token:data.token

    }
  }
};



//-------------------UPDATE-------------------
export const updateUser = (id,email,password)=>{



    return (dispatch) => {
      return axios.put(`api/user/${id}`,{id:id,email: email,password:password})
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateUserSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateUserSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_USER,
    payload: {
      _id: data.id,
      email: data.email,
      password: data.password,
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteUserSuccess = _id => {
  return {
    type: DELETE_USER,
    payload: {
      _id
    }
  }
}

export const deleteUser = id => {
  return (dispatch) => {
    return axios.delete(`api/user/${id}`,{id:id})
    .then(response => {
        dispatch(deleteUserSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};

//GET_LOGIN
export const getLoginUser = (users) => {
  return {
    type: GET_LOGIN_USER,
    users
  }
};

export const getLoginsUser = () => {
  return (dispatch) => {
    return axios.get('api/user/login')
      .then(response => {
              console.log(response.data+"getLogin")
        dispatch(getLoginUser(response.data))
<<<<<<< HEAD
========
    return axios.get('api/theories',{headers:{"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}})

      .then(response => {
        dispatch(fetchTheories(response.data))
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/redux/actions/index.jsx
      })
      .catch(error => {
        alert('connectez-vous pour avoir accès.')
=======
      })
      .catch(error => {
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
        throw(error);
      });
  };
};

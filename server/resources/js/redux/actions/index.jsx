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

//------------------------------------------SOLUTIONS DES EXERCICES-------------------------------
//-------------------ADD-------------------
export const createSolution = ({solution,type }) => {
  return (dispatch) => {
    return axios.post(`api/solution/add`, {solution,type})
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
        throw(error);
      });
  };
};

export const createSolutionSuccess =  (data) => {
  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')
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
        headers:{'Content-Type':'application/json'}
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
//headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
    headers:{'Content-Type':'application/json'}

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

export const fetchAllSolutions = () => {
  return (dispatch) => {
    return axios.get('api/solutions',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
        dispatch(fetchSolutions(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


//------------------------------------------EXERCICES-------------------------------
//-------------------ADD-------------------
export const createExercice = ({ennonce,type }) => {
  return (dispatch) => {
    return axios.post(`api/exercice/add`, {ennonce,type})
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
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateExercice = (id,ennonce,type)=>{



    return (dispatch) => {
      return axios.put(`api/exercice/${id}`,{id:id,ennonce: ennonce,type:type},{
        headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
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
      headers:{'Content-Type':'application/json'}
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
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
        dispatch(fetchExercices(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//----------------------------------AUTHENTIFICATION--------------------------------------------

//POST_REGISTER
export const createRegister = ({email,password}) => {
  return (dispatch) => {
    return axios.post(`api/auth/register`, {email,password})
      .then(response => {
console.log(response)
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
      _id: ",;,n;",
      email: "jkhkjhkj",
      password:"nn,b,n"

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
    return axios.get('api/auth/register',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
              console.log(response.data+"getRegister")
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

        dispatch(createLoginSuccess(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createLoginSuccess =  (data) => {
  console.log(data.user+"testAddLogin")

  return {
    type: POST_LOGIN,
    payload: {
      _id: ",;,n;",
      email: "jkhkjhkj",
      password:"nn,b,n"

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
    return axios.get('api/auth/login',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
              console.log(response.data+"getLogin")
        dispatch(getLogin(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

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
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateTheorie = (titre,texte,image,video )=>{



    return (dispatch) => {
      return axios.put(`api/theorie/${id}`,{id:id,titre: titre,texte:texte,image:image,video:video},{
        headers:{'Content-Type':'application/json'}
          })
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
    return axios.delete(`api/theorie/${id}`,{id:id},{
//headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
    headers:{'Content-Type':'application/json'}

    }).then(response => {
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
    return axios.get('api/theories',{
      headers:{'Content-Type':'application/json'}
        })
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
    return axios.post(`api/user/add`, {email,password})
      .then(response => {
console.log(response)
        dispatch(createRegisterUserSuccess(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createRegisterUserSuccess =  (data) => {
  console.log(data.user+"testAddRegister")

  return {
    type: ADD_USER,
    payload: {
      _id: ",;,n;",
      email: "jkhkjhkj",
      password:"nn,b,n"

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
    return axios.get('users',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
              console.log(response.data+"getRegister")
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
    type: POST_LOGIN,
    payload: {
      _id: ",;,n;",
      email: "jkhkjhkj",
      password:"nn,b,n"

    }
  }
};



//-------------------UPDATE-------------------
export const updateUser = (id,email,password)=>{



    return (dispatch) => {
      return axios.put(`api/user/${id}`,{id:id,email: email,password:password},{
        headers:{'Content-Type':'application/json'}
          })
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
    return axios.delete(`api/user/${id}`,{id:id},{
//headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
    headers:{'Content-Type':'application/json'}

    }).then(response => {
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
    return axios.get('api/user/login',{
      headers:{'Content-Type':'application/json'}
        })
      .then(response => {
              console.log(response.data+"getLogin")
        dispatch(getLoginUser(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

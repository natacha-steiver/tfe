// src/js/actions/index.js


import {
  ADD_SOLUTION,
  DELETE_SOLUTION,
  FETCH_SOLUTION,
  UPDATE_SOLUTION,
  POST_LOGIN,
  GET_LOGIN,
  POST_REGISTER,
  GET_REGISTER


 } from  "../constantes/index";
import axios from 'axios';

//------------------------------------------SOLUTIONS DES EXERCICES-------------------------------
//-------------------ADD-------------------
export const createSolution = ({solution,type }) => {
  return (dispatch) => {
    return axios.post(`api/exercice/add`, {solution,type})
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
      return axios.put(`api/exercice/${id}`,{id:id,solution: solution,type:type},{
        headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
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
    return axios.delete(`api/exercice/${id}`,{id:id},{
      headers:{'Content-Type':'application/json',"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBmOGEwZGFlOWM2MzM5Yjc0MmY2ZDAiLCJpYXQiOjE1NzgwNzY2ODUsImV4cCI6MTU3ODA3ODQ4NX0.qN4JbNR8tPk6g5NzYNjA33Qe23apr-zKtSxmFH-46Ls"}
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

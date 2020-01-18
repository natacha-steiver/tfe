import { createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';
axios.defaults.withCredentials = true

import rootReducer from "../reducers/index";
import { fetchAllSolutions } from '../actions/index';
import { fetchAllExercices } from '../actions/index';
import { fetchAllTheories } from '../actions/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
//import { fetchAllAuthentification } from '../actions/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory({
  basename: '/',
})
const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware( routerMiddleware(history),thunk)),
);

  export const login = (email,password)=>{


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
  const resp= axios
    .post(`api/auth/login`,{email:email,password:password},{
       headers:{'Content-Type':'application/json',tokenTxt:'ooooo' }    },{withCredentials:true})
    .then(res =>{
      axios.defaults.withCredentials = true
      axios.defaults.xsrfHeaderName = "tokenTxt";
      axios.defaults.xsrfCookieName = "tokenTxt";
  console.log(JSON.stringify(res) )
  //sessionStorage.setItem('test',JSON.stringify(res.data.token))
  store.dispatch(fetchAllTheories())
  store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllExercices())
  console.log(res.data.auth)
  //cookie split
  var tokenC=res.config.headers.tokenTxt.replace('j:{"type":"bearer","token":','').split(",",1,res.config.headers.tokenTxt.length-1)
  //var tokenC=res.config.headers.tokenTxt

  localStorage.setItem('tokenc',tokenC)
  localStorage.setItem('tokenD',res.config.headers.tokenTxt)

  localStorage.setItem("tokenn",res.data.user.token)
  //document.cookie =axios.defaults.headers['xsrfCookieName']
  //localStorage.setItem("n",JSON.stringify(document.cookie))
  localStorage.setItem("tokn",res.data.user.token)
  //axios.defaults.headers.common['Authorization']  =`Bearer ${tokenC}`
   axios.defaults.headers.common['Authorization']  ="Bearer "+res.data.user.token
  //console.log(res.config.headers)
    console.log(res.config.headers)
    //window.location.href = '/admin';
  if (res.config.headers.tokenTxt == "undefined" ||  res.config.headers.tokenTxt==null ||  res.config.headers.tokenTxt==""){

    return axios
      .post(`api/auth/login`,{email:email,password:password},{
         headers:{'Content-Type':'application/json',"Authorization":"Bearer "+res.data.user.token }    },{withCredentials:true})
  .then(res=>{
    console.log(res.config.headers)

  })
  }
  /*

  return axios.get('api/solutions',{
    headers:{'Content-Type':'application/json','Authorization':`${localStorage.getItem("tokenn")}`}
      })
   */

  //var token= res.data


  }).catch(error=>{
    alert(error+" Problème de connexion en cours... mot de passe et/ou login invalide")
  }
  )


}
/*

store.dispatch(fetchAllTheories())
store.dispatch(fetchAllSolutions())
store.dispatch(fetchAllExercices())

 */







let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
export default store;

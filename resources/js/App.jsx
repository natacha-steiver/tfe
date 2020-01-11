import React from 'react';
import ReactDOM from "react-dom";
import { register } from 'register-service-worker'
import { Route,Link, Switch,BrowserRouter as Router,withRouter,NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Exercice from './components/backend/exercices/exercice/index'

import CreateSolution from './components/container/createSolution';
import SolutionList from './components/container/SolutionList';



import CreateTheorie from './components/container/createTheorie';
import TheorieList from './components/container/TheorieList';

import CreateExercice from './components/container/createExercice';
import ExerciceList from './components/container/ExerciceList';

import Admin from './components/admin/index'


import Login from './components/login/index'
import Register from './components/register/index'




//import Perso from "./components/introduction/perso/index"
import Keyevent from "./components/keyevent/index"
import MoveOffset from "./components/keyevent/MoveOffset"
import Menu from "./components/menu/index"
import './App.css';
import { Provider } from 'react-redux'
import store,{history} from './redux/store'
class App extends React.Component {

constructor(props){
  super(props)
  this.state={
    url:'',
    nom:''
  }
}
  componentDidMount() {
       this.googleSDK();
       console.log('sfsfd');
   }

   prepareLoginButton = () => {

   console.log(this.refs.googleLoginBtn);

   this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
       (googleUser) => {

       let profile = googleUser.getBasicProfile();
       console.log('Token || ' + googleUser.getAuthResponse().id_token);
       console.log('ID: ' + profile.getId());
       console.log('Name: ' + profile.getName());
       console.log('Image URL: ' + profile.getImageUrl());
       console.log('Email: ' + profile.getEmail());
       //YOUR CODE HERE

this.setState({url:profile.getImageUrl(),nom:profile.getName()})
       }, (error) => {
           alert(JSON.stringify(error, undefined, 2));
       });

   }

   googleSDK = () => {

       window['googleSDKLoaded'] = () => {
         window['gapi'].load('auth2', () => {
           this.auth2 = window['gapi'].auth2.init({
             client_id: '49593059337-lftuid18b6gjfohqtuegcmtq5k0o57fs.apps.googleusercontent.com',
             cookiepolicy: 'single_host_origin',
             scope: 'profile email'
           });
           this.prepareLoginButton();
         });
       }

       (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'google-jssdk'));

   }



render(){

  return (
    <div>

<Menu/>

    <div className="row mt-5">
              <div className="col-md-12">
                  <h2 className="text-left">Google Login Demo</h2>
                  <div className="card mt-3">
                      <div className="card-body">

                          <div className="row mt-5 mb-5">
                              <div className="col-md-4 mt-2 m-auto ">
                                  <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                                      Login with Google
                                  </button>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>

<ul>

<li><img src={this.state.url} alt={this.state.url}/></li>
<li>{this.state.nom}</li>
{/*faire un bouton sign out google*/}
<button>Déconnexion</button>
</ul>
    </div>

    );
}
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <> { /* your usual react-router v4/v5 routing */ }
    <Switch>
      <Route  exact path="/" render={() => (<div>      <App /></div>)} />



      <Route  path="/login">
  <Login/>

      </Route>
      <Route  path="/admin">
  <Admin/>

      </Route>


                    <Route path="/theories">

                    <CreateTheorie/>
                     <TheorieList />
                    </Route>


                    <Route path="/login">

                    <Login/>

                    </Route>
                    <Route path="/register">

                    <Register/>

                    </Route>

    


    </Switch>
  </>

    </ConnectedRouter>
  </Provider>,
  rootElement
);

register();
export default App

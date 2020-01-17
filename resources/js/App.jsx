import React from 'react';
import ReactDOM from "react-dom";
import { register } from 'register-service-worker'
import { Route,Link, Switch,BrowserRouter as Router,withRouter,NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import '../assets/sass/app.min.css'
import Exercice from './components/backend/exercices/exercice/index'



import { Component, useRef } from "react";
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
import { fetchAllSolutions } from './redux/actions/index';
import { fetchAllExercices } from './redux/actions/index';
import { fetchAllTheories } from './redux/actions/index';
function App(props) {




  return (
    <div>
<section id="contentMain">

<Menu/>

</section>




<ul>


{/*faire un bouton sign out google*/}
<button>Déconnexion</button>
</ul>
    </div>

    );

}


const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <> { /* your usual react-router v4/v5 routing */ }
    <Switch>
      <Route   path="/" render={() => (<div>      <App/></div>)} />



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

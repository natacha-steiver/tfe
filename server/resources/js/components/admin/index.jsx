import React,{Component} from 'react'
//import {getList,storeSite} from './ajax'


import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';

import Exercice from '../backend/exercices/exercice/index'

import CreateSolution from '../container/createSolution';
import SolutionList from '../container/SolutionList';

import CreateExercice from '../container/createExercice';
import ExerciceList from '../container/ExerciceList';


import CreateTheorie from '../container/createTheorie';
import TheorieList from '../container/TheorieList';


import Login from '../login/index'
import Register from '../register/index'

class Admin extends Component{


    render() {


return(
  <div>
  <h2>01 <span> - Administration</span></h2>
  <div>




    <Router>
          <div>
            <nav>
              <ul>



                <li>      <Link to={ `/exercices` }>
                      exercices
                      </Link>
                      </li>
                      <li>
                      <Link to={ `/solutions` }>
                      solutions
                      </Link>
                      </li>

                      <li>      <Link to={ `/theories` }>
                            theories
                            </Link>
                            </li>
                            <li>      <Link to={ `/login` }>
                                  login
                                  </Link>
                                  </li>

                                  <li>      <Link to={ `/register` }>
                                      register
                                        </Link>
                                        </li>



              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL.

tester avec admin!!!!!
                */}
            <Switch>


              <Route path="/solutions">
              <CreateSolution/>
               <SolutionList />

              </Route>

              <Route path="/exercices">

              <CreateExercice/>
               <ExerciceList />
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
          </div>
        </Router>
  </div>
  </div>
);



}



}

export default Admin

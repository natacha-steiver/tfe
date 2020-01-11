import React,{Component} from 'react'
//import {getList,storeSite} from './ajax'



import { HashRouter, Route, NavLink,Link } from 'react-router-dom';


import Solution from '../backend/crud/solution/index'
import Theorie from '../backend/crud/theorie/index'
import Exercice from '../backend/crud/exercice/index'





import Register from '../register/index'


const routes = [


  { path: '/solutions', component:Solution },
  { path: '/exercices', component:Exercice },
  { path: '/theories', component:Theorie},

  { path: '/register', component:Register }




 ];

class Admin extends Component{


    render() {


return(
  <div>
  <h2>01 <span> - Administration</span></h2>


     <HashRouter>
       <div>
        <header>
          <h2>A Map of Thrones</h2>
          <ul>
          <li>
          <Link to="/solutions" >
            solutions
          </Link>
          </li>
          <li>

                <Link to="/exercices" >
                  exercices
                </Link>
          </li>
          <li>
          <Link to="/theories" >
            theories
          </Link>
          </li>
          <li>
          <Link to="/register" >
          gestion des accès administrateurs
          </Link>

          </li>



          </ul>
        </header>

         <section>
           {routes.map(route => <Route {...route} key={route.path} />)}
         </section>
       </div>
     </HashRouter>

  </div>
);



}



}

export default Admin

import React from 'react';
import ReactDOM from "react-dom";
import {getMenu} from '../../ajax';
import Test from '../test/index';
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/components/menu/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
import Admin from '../admin/index';
import TheorieListe from '../frontend/apprendre/theorie/menu';
import ExerciceListe from '../frontend/apprendre/pratique/menu';
import CreateExercice from '../container/createExercice';
import ExerciceList from '../container/ExerciceList';

<<<<<<< HEAD
========
import Login from '../login/index';
import TheorieListe from '../frontend/apprendre/theorie/menu';
import ExerciceListe from '../frontend/apprendre/pratique/menu';
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/components/menu/index.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261



import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';



class Menu extends React.Component {


  constructor(props){
    super(props)
    this.state={

      menu: [],
      show:true
    }

  }

componentDidMount(){
  this.getAllItem()
}



getAllItem(){
  getMenu().then(
    data => {
      this.setState(
      {

        menu:data,

      },    () => {
          console.log(this.state.menu)

          }
      )
    }
  )
}


render(){

  return (
    <div>
    <Router>
          <div>
            <nav>
              <ul>
{/*map a l'extérieur ou comme clé li...*/}
                      <ul>
                      <h2>javascript</h2>

                        {
                          this.state.menu.map(item=>(
                                <li  key={item._id}>
                            <Link to={ `/js/${item.nom}` }>
                            {item.nom}
                            </Link>
                                  </li>
                          ))
                        }

                      </ul>
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/components/menu/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
                      <Link to={ `/admin` }>
                      admin
                      </Link>

                      <Link to={ `/apprendre` }>
                      apprendre
                      </Link>
<<<<<<< HEAD
========
                      <Link to={ `/login` }>
                      login
                      </Link>

                      <Link to={ `/apprendre` }>
                      apprendre
                      </Link>
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/components/menu/index.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
                      <Link to={ `/entrainement` }>
                      s'entrainer
                      </Link>

<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/components/menu/index2.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
                      <li>      <Link to={ `/exercices` }>
                            exercices
                            </Link>
                            </li>
<<<<<<< HEAD
========
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/components/menu/index.jsx
=======
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261

              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL.

tester avec admin!!!!!
                */}
            <Switch>

              <Route path="/js/ex1">
                <Test/>
              </Route>
<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/components/menu/index2.jsx
              <Route exact path="/admin">
                <Admin/>
========
              <Route  path="/login">
                <Login/>
>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/components/menu/index.jsx
=======
              <Route exact path="/admin">
                <Admin/>
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
              </Route>


              <Route path="/apprendre">
                <TheorieListe />
              </Route>
              <Route path="/entrainement">
                <ExerciceListe />
              </Route>

              <Route path="/exercices">

<<<<<<< HEAD
<<<<<<<< HEAD:resources/js/components/menu/index2.jsx
              <CreateExercice/>
               <ExerciceList />
              </Route>
========


>>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261:server/resources/js/components/menu/index.jsx
=======
              <CreateExercice/>
               <ExerciceList />
              </Route>
>>>>>>> 6dad353783730e72596bf74ce513cee718ad8261
            </Switch>
          </div>
        </Router>
</div>
);
}
}

export default Menu

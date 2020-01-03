import React from 'react';
import ReactDOM from "react-dom";
import {getMenu} from '../../ajax';
import Test from '../test/index';
import Admin from '../admin/index';

import CreateRegister from '../container/createRegister';
import RegisterList from '../container/RegisterList';
import CreateLogin from '../container/createLogin';

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
                      <Link to={ `/admin` }>
                      admin
                      </Link>
                <li>      <Link to={ `/api/auth/login` }>
                      login
                      </Link>
                      </li>
                      <li>
                      <Link to={ `/api/auth/register` }>
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

              <Route path="/js/ex1">
                <Test/>
              </Route>
              <Route path="/admin">
                <Admin/>
              </Route>
              <Route path="/api/auth/register">
    <CreateRegister/>
      <RegisterList />
              </Route>

              <Route path="/api/auth/login">
    <CreateLogin/>

              </Route>
            </Switch>
          </div>
        </Router>
</div>
);
}
}

export default Menu

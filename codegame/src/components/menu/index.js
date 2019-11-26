import React from 'react';
import ReactDOM from "react-dom";
import {getMenu} from '../../ajax';
import Keyevent from '../keyevent/index';
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



getAllItem = () =>{
  getMenu().then(
    data => {
      this.setState(
      {

        menu:data[0].nom,

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

                      <ul>
                      <h2>javascript</h2>
                      <li>
                        <Link to="/js/ex1">ex1</Link>
                      </li>
                      </ul>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>

              <Route path="/js/ex1">
                <Keyevent/>
              </Route>
            </Switch>
          </div>
        </Router>
</div>
);
}
}

export default Menu

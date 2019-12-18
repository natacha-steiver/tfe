import React from 'react';
import ReactDOM from "react-dom";
import { register } from 'register-service-worker'
import CreateSolution from './components/container/createSolution';
import SolutionList from './components/container/SolutionList';

//import Perso from "./components/introduction/perso/index"
import Keyevent from "./components/keyevent/index"
import MoveOffset from "./components/keyevent/MoveOffset"
import Menu from "./components/menu/index"
//import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
class App extends React.Component {






render(){

  return (
    <div>

<CreateSolution/>
 <SolutionList />
    <Menu/>

    </div>

    );
}
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

register();
export default App

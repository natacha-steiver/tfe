import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
//import Perso from "./components/introduction/perso/index"
import Keyevent from "./components/keyevent/index"
import MoveOffset from "./components/keyevent/MoveOffset"
import Test from "./components/test/index"
//import './App.css';

class App extends React.Component {






render(){

  return (
    <div>



    <Keyevent/>

    </div>

    );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App

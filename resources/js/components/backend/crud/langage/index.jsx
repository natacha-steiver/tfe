import React,{Component} from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateLangage from '../../../container/createLangage';
import LangageList from '../../../container/LangageList';

class Langage extends Component{


  render() {
    return(
      <div>
      <CreateLangage/>
      <LangageList/>

      </div>
    );
  }


}

export default Langage

import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateExercice from '../../../container/createExercice';
import ExerciceList from '../../../container/ExerciceList';

class Exercice extends Component{


  render() {
    return(
      <div>
      <CreateExercice/>
      <ExerciceList/>

      </div>
    );
  }


}

export default Exercice

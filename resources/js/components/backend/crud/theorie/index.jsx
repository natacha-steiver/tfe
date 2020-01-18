import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateTheorie from '../../../container/createTheorie';
import TheorieList from '../../../container/TheorieList';

class Theorie extends Component{


  render() {
    return(
      <div>
      <CreateTheorie/>
      <TheorieList/>

      </div>
    );
  }


}

export default Theorie

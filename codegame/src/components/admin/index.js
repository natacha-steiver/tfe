import React,{Component} from 'react'
//import {getList,storeSite} from './ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import Add from '../backend/exercices/add/index'
import Update from '../backend/exercices/update/index'
import Delete from '../backend/exercices/delete/index'
class Admin extends Component{


    render() {


return(
  <div>
  <h2>01 <span> - Administration</span></h2>
  <Add/>
  <Update/>
  <Delete/>
  </div>
);



}



}

export default Admin

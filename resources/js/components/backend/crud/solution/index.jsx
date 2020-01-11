import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateSolution from '../../../container/createSolution';
import SolutionList from '../../../container/SolutionList';

class Solution extends Component{


    render() {
return(
<div>
<CreateSolution/>
<SolutionList/>

</div>
    );
  }


}

export default Solution

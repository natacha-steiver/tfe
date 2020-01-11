// SolutionList.js

import React, { useState }  from 'react';
import { connect } from 'react-redux';
import TheorieFront from './index';

import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';
function TheorieListe({ theories}) {
  const [langageNew, setLangage] = useState('');
  const [titreNew, setTitre] = useState('');
  {/* récupérer redux langages!*/}
  const langages=[{langage:"html"},{langage:"javascript"}]
  return (
    <div style={{position:"relative"}}>

{langages.map((theo,index)=>{
  return(
    <ul >


      <li key={theo.index} >

      <h2  onClick={()=>{  setLangage(theo.langage)}} style={{cursor:"pointer"}}>
       {theo.langage}
       </h2>
      </li>
    </ul>
  );
})}











<Router>

<div style={{position:"relative"}}>
      {
      theories.filter(theorie=>theorie.langage==langageNew ).map((theorie,index )=> {
        return (

          <div style={{minHeight:"3em"}}>








<ul style={{display:"inline-block",width:"10%",position:"absolute",margin:"1em"}}>
<li >
<Link to={ `/theorie/${theorie._id}` }>
{theorie.titre}
</Link>
</li>
</ul>





<div style={{display:"inline-block",width:"50%",position:"fixed",top:"1em",marginLeft:"30%"}}>

                  <Switch>


                  <Route exact path={ `/theorie/${theorie._id}` }   >
<TheorieFront  theorie={ theorie } key={theorie._id} />
                  </Route>




                  </Switch>
</div>

          </div>
            );
          })}



</div>










</Router>
</div>
);}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    theories: state.theories

  };
};


export default connect(
  mapStateToProps
)(TheorieListe);

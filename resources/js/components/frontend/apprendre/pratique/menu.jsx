// SolutionList.js

import React, { useState }  from 'react';
import { connect } from 'react-redux';
import ExerciceFront from './index';

import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';

function ExerciceListe({ exercices}) {
  const [langageNew, setLangage] = useState('');
  const [titreNew, setTitre] = useState('');
  {/* récupérer redux langages!*/}
  const langages=[{langage:"html"},{langage:"javascript"}]
  return (
    <div>

{langages.map((ex,index)=>{
  return(
    <ul>


      <li key={ex.index}>

      <h2  onClick={()=>{  setLangage(ex.langage)}} style={{cursor:"pointer"}}>
       {ex.langage}
       </h2>
      </li>
    </ul>
  );
})}




<Router>

<div style={{position:"relative"}}>


          {
          exercices.filter(exercice=>exercice.type==langageNew ).map((exercice,index )=> {
            return (

              <div style={{minHeight:"3em"}}>








    <ul style={{display:"inline-block",width:"10%",position:"absolute",margin:"1em"}}>
    <li >
    <Link to={ `/exercice/${exercice._id}` }>
    {exercice.titre}
    </Link>
    </li>
    </ul>





    <div style={{display:"inline-block",width:"50%",top:"1em",marginLeft:"30%"}}>

                      <Switch>


                      <Route exact path={ `/exercice/${exercice._id}` }   >
    <ExerciceFront  exercice={exercice } key={exercice._id} />
                      </Route>




                      </Switch>
    </div>

              </div>
                );
              })}


    </div>


    </Router>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    exercices: state.exercices

  };
};


export default connect(
  mapStateToProps
)(ExerciceListe);

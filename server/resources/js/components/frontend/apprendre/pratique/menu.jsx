// SolutionList.js

import React, { useState }  from 'react';
import { connect } from 'react-redux';
import ExerciceFront from './index';


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



      {
      exercices.filter(ex=>ex.type==langageNew ).map((ex,index )=> {
        return (

          <div>



                 <h2  onClick={()=>{  setTitre(ex.titre)}} style={{cursor:"pointer"}}>
                  {ex.titre}
                  </h2>
          </div>
            );
          })}



      {
      exercices.filter(exercice=>exercice.titre==titreNew ).map((exercice,index )=> {
        return (

          <div>


              <ExerciceFront exercice={ exercice } key={exercice._id} />




          </div>

        );
      })}

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

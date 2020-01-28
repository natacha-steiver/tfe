// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Exercice from '../backend/exercices/delete/exercice';
import { deleteExercice} from '../../redux/actions';
import { updateExercice} from '../../redux/actions';
import { fetchAllExercices} from '../../redux/actions';

function ExerciceList({ exercices, onDelete,onUpdate,onFetch }) {

  return (
    <div>
    <button onClick={()=>{onFetch()}}>liste</button>
      {
      exercices.map((exercice,index )=> {
        return (

          <Exercice exercice={ exercice } onDelete={ onDelete } onUpdate={onUpdate} key={exercice._id} />

        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    exercices: state.exercices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteExercice(id))
    },
    onUpdate: (id,type,ennonce,titre,ref) => {
      dispatch(updateExercice(id,type,ennonce,titre,ref))
    },
    onFetch:()=>{
      dispatch(fetchAllExercices())
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciceList);

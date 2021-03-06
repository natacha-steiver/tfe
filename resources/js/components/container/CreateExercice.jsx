// CreateSolution.js
// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
//import ExerciceAdd from './addEx';
import { deleteExercice} from '../../redux/actions';
import { updateExercice} from '../../redux/actions';
import { createExercice } from '../../redux/actions';
import { fetchAllExercices } from '../../redux/actions';
// CreateSolution.js


import NewExercice from '../backend/exercices/add/NewExercice';


const mapDispatchToProps = dispatch => {

  return {

    onAddExercice: (exercice) => {
      dispatch(createExercice(exercice));
    },
    onFetch:()=>{
      dispatch(fetchAllExercices())

    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewExercice);

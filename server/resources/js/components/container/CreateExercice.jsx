// CreateSolution.js

import { connect } from 'react-redux';
import { createExercice } from '../../redux/actions';
import NewExercice from '../backend/exercices/add/NewExercice';


const mapDispatchToProps = dispatch => {

  return {

    onAddExercice: exercice => {
      dispatch(createExercice(exercice));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewExercice);

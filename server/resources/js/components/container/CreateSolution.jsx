// CreateSolution.js

import { connect } from 'react-redux';
import { createSolution } from '../../redux/actions';
import NewSolution from '../backend/exercices/add/NewSolution';


const mapDispatchToProps = dispatch => {

  return {

    onAddSolution: solution => {
      dispatch(createSolution(solution));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewSolution);

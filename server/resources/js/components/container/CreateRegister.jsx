// CreateSolution.js

import { connect } from 'react-redux';
import { createRegister } from '../../redux/actions';
import NewRegister from '../register/NewRegister';


const mapDispatchToProps = dispatch => {

  return {

    onAddRegister: authentification => {
      dispatch(createRegister(authentification));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewRegister);

// CreateSolution.js

import { connect } from 'react-redux';
import { createRegisterUser } from '../../redux/actions';
import NewRegisterUser from '../register/NewRegisterUser';


const mapDispatchToProps = dispatch => {

  return {

    onAddRegisterUser: user => {
      dispatch(createRegisterUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewRegisterUser);

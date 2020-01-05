// CreateSolution.js

import { connect } from 'react-redux';
import { createLoginUser } from '../../redux/actions';
import NewLoginUser from '../login/NewLoginUser';


const mapDispatchToProps = dispatch => {

  return {

    onAddLoginUser: user => {
      dispatch(createLoginUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewLoginUser);

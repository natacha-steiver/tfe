// CreateSolution.js

import { connect } from 'react-redux';
import { createLogin } from '../../redux/actions';
import NewLogin from '../login/NewLogin';


const mapDispatchToProps = dispatch => {

  return {

    onAddLogin: authentification => {
      dispatch(createLogin(authentification));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewLogin);

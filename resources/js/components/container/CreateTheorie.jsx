// CreateSolution.js

import { connect } from 'react-redux';
import { createTheorie } from '../../redux/actions';
import NewTheorie from '../backend/exercices/add/NewTheorie';


const mapDispatchToProps = dispatch => {

  return {

    onAddTheorie: (titre,texte,image,video,langage) => {
      dispatch(createTheorie(titre,texte,image,video,langage));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewTheorie);

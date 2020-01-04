// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Theorie from '../backend/exercices/delete/theorie';
import { deleteTheorie} from '../../redux/actions';
import { updateTheorie} from '../../redux/actions';

function TheorieList({ theories, onDelete,onUpdate }) {

  return (
    <div>
      {
      theories.map((theorie,index )=> {
        return (

          <Theorie theorie={ theorie } onDelete={ onDelete } onUpdate={onUpdate} key={theorie._id} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    theories: state.theories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTheorie(id))
    },
    onUpdate: (id,titre,texte,image,video) => {
      dispatch(updateTheorie(id,titre,texte,image,video))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheorieList);

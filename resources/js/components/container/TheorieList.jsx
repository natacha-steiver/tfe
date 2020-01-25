// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Theorie from '../backend/exercices/delete/theorie';
import { deleteTheorie} from '../../redux/actions';
import { updateTheorie} from '../../redux/actions';
import { fetchAllTheories} from '../../redux/actions';

function TheorieList({ theories, onDelete,onUpdate,onFetch }) {

  return (
    <div>
    <button onClick={()=>{onFetch()}}>liste</button>
      {
      theories.map((theorie,index )=> {
        return (

          <Theorie theorie={ theorie } onDelete={ onDelete } onUpdate={onUpdate} onFetch={onFetch} key={theorie._id} />
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
    onUpdate: (id,titre,texte,image,video,langage) => {
      dispatch(updateTheorie(id,titre,texte,image,video,langage))
    },
    onFetch: () => {
      dispatch(fetchAllTheories())
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheorieList);

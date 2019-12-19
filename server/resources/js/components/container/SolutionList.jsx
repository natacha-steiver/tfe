// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Solution from '../backend/exercices/delete/solution';
import { deleteSolution } from '../../redux/actions';
import { updateSolution } from '../../redux/actions';

function SolutionList({ solutions, onDelete,onUpdate }) {

  return (
    <div>
      {
        solutions.map((solution,index )=> {
        return (

          <Solution solution={ solution } onDelete={ onDelete } onUpdate={onUpdate} key={solution._id} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    solutions: state.solutions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteSolution(id))
    },
    onUpdate: (id,type,solution) => {
      dispatch(updateSolution(id,type,solution))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionList);

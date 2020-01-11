// src/js/reducers/index.js


import { combineReducers } from 'redux';

import solutions from './solutionReducer';

import exercices from './exerciceReducer';
import theories from './theorieReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
 router: connectRouter(history),
      exercices: exercices,
    solutions: solutions,


    theories: theories
});

export default rootReducer
/*

const rootReducer = (state = {}, action) => {
  console.log('Test if rootReducer is ever called')

  return {
    solutions: solutions(state.solutions, action),
    exercices: exercices(state.exercices, action),

  }
}


export default rootReducer
 */

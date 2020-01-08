// src/js/reducers/index.js


import { combineReducers } from 'redux';

import solutions from './solutionReducer';

import exercices from './exerciceReducer';
import theories from './theorieReducer';

export default combineReducers({

      exercices: exercices,
    solutions: solutions,


    theories: theories
});


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

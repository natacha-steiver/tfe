// src/js/reducers/index.js


import { combineReducers } from 'redux';
import solutions from './solutionReducer';

export default combineReducers({
    solutions: solutions
});

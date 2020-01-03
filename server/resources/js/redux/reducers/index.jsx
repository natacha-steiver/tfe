// src/js/reducers/index.js


import { combineReducers } from 'redux';
import solutions from './solutionReducer';
import authentifications from './authReducer';

export default combineReducers({
    solutions: solutions,
    authentifications: authentifications
});

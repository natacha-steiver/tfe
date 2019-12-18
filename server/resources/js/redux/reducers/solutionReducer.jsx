// src/js/reducers/index.js

import { ADD_SOLUTION,DELETE_SOLUTION,FETCH_SOLUTION,UPDATE_SOLUTION } from "../constantes/index";


export default function solutionReducer(state = [], action) {
  switch (action.type) {
    case ADD_SOLUTION:
      return [...state,action.payload];
    case DELETE_SOLUTION:
      return state.filter(solution => solution._id !== action.payload.id);
    case UPDATE_SOLUTION:
    return state.map((solution)=>{
        if(solution._id === action.payload.id) {
          return {
             ...solution,
             type:action.payload.type,
             solution:action.payload.solution,

          }
        } else return post;
        })
      case FETCH_SOLUTION:
      return action.solutions;
    default:
      return state;
  }
}

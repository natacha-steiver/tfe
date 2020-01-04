// src/js/reducers/index.js

import { ADD_USER,DELETE_USER,FETCH_USER,UPDATE_USER } from "../constantes/index";


export default function userReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [...state,action.payload];
    case DELETE_USER:
      return state.filter(user =>user._id !== action.payload._id);
    case UPDATE_USER:
      const indexOfUser = state.findIndex(user => user._id === action.payload._id);
      let newState = [...state];
      newState[indexOfUser] = action.payload;
      return newState;

      case FETCH_USER:
      return action.users;
    default:
      return state;
  }
}

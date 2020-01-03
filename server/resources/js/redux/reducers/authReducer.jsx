// src/js/reducers/index.js

import {
  POST_LOGIN,
  GET_LOGIN,
  POST_REGISTER,
  GET_REGISTER
} from "../constantes/index";


export default function authReducer(state = [], action) {
  switch (action.type) {


      case POST_REGISTER:
        return [...state,action.payload];

      case GET_REGISTER:
        return action.authentifications;

        case POST_LOGIN:
          return [...state,action.payload];

        case GET_LOGIN:
          return action.authentifications;

      default:
        return state;
  }
}

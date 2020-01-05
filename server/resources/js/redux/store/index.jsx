import { createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";
import { fetchAllSolutions } from '../actions/index';
import { fetchAllExercices } from '../actions/index';
import { fetchAllTheories } from '../actions/index';
import { fetchAllUsers } from '../actions/index';
//import { fetchAllAuthentification } from '../actions/index';
//import { getRegister } from '../actions/index';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);



  store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllExercices())
//  store.dispatch(getRegister())
//  store.dispatch(fetchAllUsers())
  store.dispatch(fetchAllTheories())






let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
export default store;

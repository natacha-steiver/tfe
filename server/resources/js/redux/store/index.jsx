import { createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";
import { fetchAllSolutions } from '../actions/index';
import { fetchAllExercices } from '../actions/index';
import { fetchAllTheories } from '../actions/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
//import { fetchAllAuthentification } from '../actions/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory({
  basename: '/',
})
const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware( routerMiddleware(history),thunk)),
);



setTimeout(function(){

  store.dispatch(fetchAllTheories())
  store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllExercices())
}, 65000);




let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
export default store;

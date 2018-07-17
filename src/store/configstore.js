import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger'; //With default options
import initialState from './initialstate';
import rootReducer from '../components/routes/rootreducer';

// Create create Browser History
export const history = createHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__


// Add all middlewares here
let middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares = [thunk,reduxImmutableStateInvariant(),routerMiddleware(history),logger];
} else {
  middlewares = [thunk,routerMiddleware(history)]
}


const enhancers = [];

// If 'development' then use devToolsExtension
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

// compose all inhancers here
const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

// Create Store
export default createStore(
  rootReducer, preloadedState || initialState, composedEnhancers
);

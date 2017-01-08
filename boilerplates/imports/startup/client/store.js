import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { reducer } from 'redux-form';

import layoutReducer from './reducers/layout';
import viewsReducer from './reducers/views';

const logger = createLogger();

const reducers = combineReducers({
  form: reducer,
  layout: layoutReducer,
  views: viewsReducer,
});

const preloadedState = {};
const middlewares = [ReduxThunk,  logger];

const Store = createStore(reducers, preloadedState, applyMiddleware(...middlewares));
export default Store;

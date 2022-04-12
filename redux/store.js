import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mealsReducer from './meals/reducer';
import usersReducer from './users/reducer';


const rootReducer = combineReducers({mealsReducer, usersReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

/*
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import mealsReducer from './meals/reducer';
import usersReducer from './users/reducer';


const rootReducer = combineReducers({mealsReducer, usersReducer});
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const Store = createStore(rootReducer, composedEnhancer);

*/
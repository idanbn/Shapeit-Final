import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mealsReducer from './reducers';
import usersReducer from './users/reducer';


const rootReducer = combineReducers({mealsReducer, usersReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mealsReducer from './reducers';


const rootReducer = combineReducers({mealsReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
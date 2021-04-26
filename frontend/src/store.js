import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middlware = [thunk];

//create store to store the state of the application
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;
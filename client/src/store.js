// This is a boilerplate which will bring a function called create sore and you nned to run that 

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from  './reducers';


const initialState = {};

const middleware= [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

    export default store;
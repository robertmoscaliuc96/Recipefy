import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import post from './post';
import recipe from './recipe'


export default combineReducers({
    alert,
    auth,
    post,
    recipe

});
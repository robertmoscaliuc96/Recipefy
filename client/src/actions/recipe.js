
import axios from 'axios';

import{
    MAKE_REQUEST,
    GET_RECIPES,
    ERROR
} from './type';

// Get Recipes
const APP_ID = "6e7ee8d4";
const APP_KEY = "d33c849f2039759f2642c8e22ee8fa3b";



export const getRecipes = () => async dispatch => {
    try {
        const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
        const data = await res.json();

        dispatch({
            type:GET_RECIPES,
            payload: data.hits
        })

    } catch (err) {
        dispatch({
            type:ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
};
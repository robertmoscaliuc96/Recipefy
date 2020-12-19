
import{
    SET_LOADING,
    GET_RECIPES,
    ERROR
} from './type';

// Get Recipes
const APP_ID = "49638067";
const APP_KEY = "b7c9cb150b6d715488b9c7f35f887926";



export const getRecipes = (query) => async dispatch => {

    console.log(query)

   
    try {
        setLoading(true)
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`);
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

const setLoading= () => async dispatch =>{
    dispatch({type: SET_LOADING});
}
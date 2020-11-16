import {
    GET_RECIPES,
    ERROR,
    MAKE_REQUEST,
    SET_LOADING
} from '../actions/type'

const initialState = {
    recipe: [],
    loading: true,
    error: {}
    
}
export default function(state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true,
                recipes: []
            }
        
        case GET_RECIPES:
            return{
                ...state,
                loading: false,
                recipes: payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        default: 
            return state;

    }

}
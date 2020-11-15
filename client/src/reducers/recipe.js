import {
    GET_RECIPES,
    ERROR,
    MAKE_REQUEST
} from '../actions/type'

const initialState = {
    recipe: [],
    loading: false
    
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
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/type'

const initialState = { 
     token: localStorage.getItem('token'),
      // When make a successful request to register or log in it will be set true
      isAuthenticated: null,
      // Make sure that the loading is done
      loading: true, 
      user: null

}

// eslint-disable-next-line
export default function(state = initialState, action) {
    
    const {type, payload} = action;

    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user : payload
            }
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        


        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            }

        default: 
            return state;

    }

}
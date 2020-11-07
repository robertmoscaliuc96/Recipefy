import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from '../actions/type'

const initailState = { 
     token: localStorage.getItem('token'),
      // When make a successful request to register or log in it will be set true
      isAuthenticated: null,
      // Make sure that the loading is done
      loading: true, 
      user: null

}

export default function(state = initailState, action) {
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
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
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
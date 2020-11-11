import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UPDATE_VOTE
} from '../actions/type'

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
  };


  export default function (state= initialState, action){
      const{ type,payload}= action;

      switch (type) {
          case GET_POSTS:
              return{
                  ...state,
                  posts:payload,
                  loading:false
              };
          case GET_POST:
              return{
                  ...state,
                  posts:payload,
                  loading:false
              };
          case POST_ERROR:
              return{
                  ...state,
                  error:payload,
                  loading:false
              };

      
          default:
              return state;
      }
  }

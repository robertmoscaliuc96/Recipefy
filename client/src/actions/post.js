import axios from 'axios';

import {setAlert} from './alert';
import{
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UPDATE_VOTE
} from './type';

// Get Post
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');
  
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

      // ADD post
export const addPost = formData => async dispatch => {
        const config = {
          headers: {
            'Content-Type' : 'application/json'
          }
        }

        try {
         const res =  await axios.post('/api/posts/', formData,config);
      
          dispatch({
            type: ADD_POST,
            payload: res.data
          });
          dispatch(setAlert("Post Added","success"))
        } catch (err) { 
          dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
        }
      };



// Get single post
/* export const getPost = ()=> async dispatch => {
    try {
        const res= await axios.get(`/api/posts/${id}`);

        dispatch({
            type:GET_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
} */


// Add Like 



// Vote comment


// Remove Like


// Delete post


// Add post





// Add comment



// Delete comment



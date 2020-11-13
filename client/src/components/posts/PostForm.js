import React, {useState }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addPost} from '../../actions/post';


const PostForm = ({addPost}) => {

    const[formData, setFormData] = useState({
      title: "",
      type: "",
      description:"",
      ingredients:"",
      time:"",
      keyword: "",
    });

    const {title,description,type,ingredients,time,keyword} = formData;
    //const [title,text,setText] = useState('')
    const onChange= e => setFormData({...formData, [e.target.name]:e.target.value}); 

    return (
        <div className='post-form'>
        <div className='bg-primary p'>
          <h2>Add your Recipe</h2>
        </div>
        
        <form
          className='form my-1'
          onSubmit={e => {
            e.preventDefault();
            addPost({ title,description,type,ingredients,time,keyword });       
          }}
        >

        <div className="form-group">
          <input type='text' placeholder='Title' onChange={e =>onChange(e)} value={title} name= "title" />
        </div>
        <div className="form-group">
          <input type='text' placeholder='Ingredients' onChange={e =>onChange(e)} value={ingredients} name= "ingredients" />
        </div>
        <div className="form-group">
          <input type='text' placeholder='Type' onChange={e =>onChange(e)} value={type} name= "type" />
        </div>
        <div className="form-group">
          <input type='text' placeholder='Time' onChange={e =>onChange(e)} value={time} name= "time" />
        </div>

          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Create a description'
            value={description}
            onChange={e =>onChange(e)}
          />
          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
    )
}
PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null,{addPost})(PostForm)



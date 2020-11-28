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
            setFormData("")   
          }}
        >

        <div className="form-group">
          <i className="fas fa-hamburger"></i>
          <input type='text' placeholder='Title' onChange={e =>onChange(e)} value={title} name= "title" />
        </div>

        <div className="form-group">
        <i className="fas fa-shopping-basket"></i>
          <input type='text' placeholder='Ingredients' onChange={e =>onChange(e)} value={ingredients} name= "ingredients" />
        </div>

        <div className="form-group">
        <i class="fas fa-seedling"></i>
          <input type='text' placeholder='Type' onChange={e =>onChange(e)} value={type} name= "type" />
        </div>

        <div className="form-group">

        <i className="far fa-clock"></i>
          <input type='text' placeholder='Time' onChange={e =>onChange(e)} value={time} name= "time" />
        </div>
        <div className="form-group-text">
        <i className="fab fa-elementor"></i>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Create a description'
            value={description}
            onChange={e =>onChange(e)}
          />          
        </div>

          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
    )
}
PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null,{addPost})(PostForm)



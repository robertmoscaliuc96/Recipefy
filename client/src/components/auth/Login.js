import React, { Fragment, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect} from 'react-redux'
import PropTypes from 'prop-types';
import { login} from '../../actions/auth';
import think from '../../assets/Landing/think.svg';
import Alert from '../layout/Alert';

 const Login = ({login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const {email, password} = formData;

   
    const onChange= e => setFormData({...formData, [e.target.name]:e.target.value}); 

    const onSubmit = async e => {
      e.preventDefault();
      login(email,password);
      
  }



    //Redirect if logged in
    if(isAuthenticated){
      return <Redirect to="/posts" />
    }
    return (
        <Fragment>
          <section className="container">
            <div className="container-form">

              <form className="form" onSubmit={e=>onSubmit(e)}>
              <Alert/>
                <h1 className="large text-primary">Log in</h1>

                <div className="form-group">
                  <i class="fas fa-user"></i>
                  <input type="email" placeholder="Email Address" value= {email} onChange={e =>onChange(e)} name="email" required/>
                </div>

                <div className="form-group">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value= {password} 
                    onChange={e =>onChange(e)}
                    
                  />
                </div>
                <input type="submit" className="btn btn-primary" value="Log In" />
                <p className="my-1">
                You don't have an account? <Link to="/register">Register</Link>
              </p>
              </form>
              
              <img src={think} alt="" className="img-login" />

              
            </div>
            </section>
        </Fragment>
    );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);
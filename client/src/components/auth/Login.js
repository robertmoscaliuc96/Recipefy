import React, { Fragment, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect} from 'react-redux'
import PropTypes from 'prop-types';
import { login} from '../../actions/auth';

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
          <h1 className="large text-primary">Log in</h1>
          <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
          <form className="form" onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" value= {email} onChange={e =>onChange(e)} name="email" required/>
            </div>
            <div className="form-group">
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
          </form>
          <p className="my-1">
            You don't have an account? <Link to="/register">Register</Link>
          </p>
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
import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';

 const Login = () => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const {email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        console.log("login")
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
export default Login;
import React, { Fragment,useState } from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types'
import './landing.css';
import lunch from '../../assets/Landing/lunch.svg'


 const Register = ({setAlert, register}) => {

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        password:"",
        password2:""
    })

    const {name, email,password,password2}=formData;

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

    const onSubmit = async e =>{
        e.preventDefault();
        if(password !== password2){
            setAlert("Password do not match", "danger");
        }else {
          register({name,email,password});
          return <Redirect to="/posts" />
        }
    }


    return (
        <Fragment>
            <section className="container">
              <div className="container-form-sign">

                <div>
                  <img src={lunch} alt="" className="img-sign" />                  
                </div>

                <div className="form">
                  <form className="form-sign" onSubmit={e=>onSubmit(e)}>
                    <h1 className="large text-primary">Sign Up</h1>

                    <div className="form-group">
                      <i class="fas fa-user"></i>
                      <input type="text" placeholder="Name" value= {name} onChange={e =>onChange(e)} name="name"  />
                    </div>

                    <div className="form-group">
                      <i class="fas fa-user"></i>
                      <input type="email" placeholder="Email Address" value= {email} onChange={e =>onChange(e)} name="email" />
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
                    <div className="form-group">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value= {password2}
                        onChange={e =>onChange(e)}
                        
                      />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                    <p className="my-1">
                      Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </form>

                </div>
              </div>
        </section>
        </Fragment>
    );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
}

export default connect(null, {setAlert,register})(Register);
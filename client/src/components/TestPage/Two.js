import React, { Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './style.css'
import lunch from './lunch.png';



const Two = () => {
    return (
      <Fragment>
      <section className="container">
        <div className="container-form-sign">

        <div>
          <img src={lunch} alt="" className="img-sign-up" />
        </div>

        <div className="form">
          <form className="form-sign" >
              <h1 className="large text-primary">Sign In</h1>
              <div className="form-group">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Email Address" name="email" autocomplete="off" required/>
              </div>
              <div className="form-group">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Email Address" name="email" autocomplete="off" required/>
              </div>

              <div className="form-group">
              <i class="fas fa-lock"></i>
              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength="6"
              />
              </div>

              <input type="submit" className="btn btn-primary" value="Log In" />

              <p className="my-1">
              You don't have an account? <Link to="/one">Register</Link>
          </p>
          </form>

        </div>
        
        </div>
        </section>
    </Fragment>
    )
}



export default Two


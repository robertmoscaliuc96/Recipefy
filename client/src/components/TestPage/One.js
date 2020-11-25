
import React, { Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './style.css'

import think from './think.svg';



const One = () => {
    return (
        <Fragment>
          <section className="container">
            <div className="container-form">
            
            <form className="form" >
                <h1 className="large text-primary">Log in</h1>
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
                You don't have an account? <Link to="/two">Register</Link>
            </p>
            </form>
            
            <img src={think} alt="" className="img-login" />
            </div>
            </section>
        </Fragment>
    )
}



export default One;


/* 
          <div className="sign-up-right">
            <h1 className="large text-primary">Log in</h1>
            <form className="form" >

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
            </form>
            <p className="my-1">
                You don't have an account? <Link to="/two">Register</Link>
            </p>

          </div>
          <div className="sign-up-left">
            <img src={burger} alt="" className="img-sign-up" />
          </div>

*/
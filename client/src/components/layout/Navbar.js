import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import Logo from '../../assets/recipeLogo.svg'

const Navbar=({auth: {isAuthenticated, loading}, logout}) =>{
  
  const authLinks = (
    <ul>
      <li>
      <i className="fas fa-cookie-bite"></i>        
      <Link to='/posts'>Community</Link>
      </li>
      <li>
      <i className="far fa-lightbulb"></i>
      <Link to='/ideas'>Ideas</Link>
      </li>
      <li>
      <i className="fas fa-calculator"></i>
      <Link to='/calculator'>Calculator</Link>
      </li>
      <li>
      <a onClick={logout} href='/login'>
      <i className="fas fa-sign-out-alt"></i>{' '}
      <span className="hide-sm"></span></a> 
      </li>
  </ul>
  );

  const guessLinks = (
    <ul>
      <li>
      <i className="far fa-plus-square"></i>
        <Link to='/register'>Sign Up</Link>
      </li>
      <li>
        <i className="fas fa-sign-in-alt"></i>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
    return (
        <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <img src={Logo} alt="Cook in home" className="logo"></img>
          </Link>
        </h1>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guessLinks}</Fragment>)}
      </nav>
    )
}

Navbar.propTypes =  {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);

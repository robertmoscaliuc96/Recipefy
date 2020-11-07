import React from 'react';
import {Link} from 'react-router-dom';
import icon from '../../assets/RLogoMintBlue.svg'



const Navbar=() =>{
    return (
        <nav className="navbar bg-dark">
        <h1>
          <img src={icon} alt="Robert" className="icon"></img>
        </h1>
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
      </nav>
    )
}


export default Navbar;
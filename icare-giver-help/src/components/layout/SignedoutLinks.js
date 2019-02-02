import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="float-right navbar-nav">
      <li className="nav-item"><NavLink to='/' className="nav-link">Sign Up</NavLink></li>
      <li className="nav-item"><NavLink to='/'  className="nav-link">Log In</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
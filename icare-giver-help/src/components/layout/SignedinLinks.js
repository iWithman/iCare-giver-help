import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="float-right navbar-nav">
      <li className="nav-item"><NavLink to='/dashboard' className="nav-link">My Dashboard</NavLink></li>
      <li className="nav-item"><NavLink to='/create' className="nav-link">Add Patient</NavLink></li>
      <li className="nav-item"><NavLink to='/'  className="nav-link">Log Out</NavLink></li>
      <li className="nav-item"><NavLink to='/dashboard' className="btn btn-primary btn-circle m-auto">DH</NavLink></li>
    </ul>
  )
}

export default SignedInLinks
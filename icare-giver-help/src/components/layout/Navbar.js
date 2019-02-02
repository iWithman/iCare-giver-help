import React from 'react'
import { Link } from 'react-router-dom'

import SignedInLinks from './SignedinLinks'
import SignedOutLinks from './SignedoutLinks'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nvabar-dark bg-dark mb-3">
      <div className="container">
        <Link to='/' className="navbar-brand">iCare</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar
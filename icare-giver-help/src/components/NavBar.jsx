import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap'


class NavBar extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand> <NavLink className="m-2" to="/">Home</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><NavLink className="m-2" to="/dashboard">Dashboard</NavLink></Nav.Link>
              
            </Nav>
            {this.props.isLoggedIn && <Nav.Link inline><NavLink className="m-2" to="/login">Login</NavLink></Nav.Link>}
            {!this.props.isLoggedIn && <li style={{listStyle: 'none'}} onClick={this.props.onLogout}>Log Out</li>}
            <Nav.Link inline><NavLink className="m-2" to="/signup">Sign Up</NavLink></Nav.Link>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
      </Navbar>
  
      </div>
      
    )
  }
  
}

export default NavBar;
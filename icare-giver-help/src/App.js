import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Error from './components/error';
import Login from './components/Login';
import SignUp from './components/SignUp';



class App extends Component {
  render() {
    return (

        <BrowserRouter>
         <div>
          <NavBar />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route component={Error} />
            </Switch> 
         </div>
        </BrowserRouter>
      
    );
  }
}

export default App;

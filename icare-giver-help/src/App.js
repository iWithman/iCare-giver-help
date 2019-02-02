import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dahboard'
import AddPatient from './components/patients/AddPatient'
import PatientDetails from './components/patients/PatientDetails'

import Home from './components/Home';
import NavBar from './components/NavBar';
import Error from './components/error';
import Login from './components/Login';
import SignUp from './components/SignUp';

import './App.css';



class App extends Component {
  render() {
    return (

        <BrowserRouter>
         <div>
          <NavBar />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/add' component={AddPatient} />
              <Route path='/patient/:id' component={PatientDetails} />
              <Route path='/*' component={Error} />
            </Switch> 
         </div>
        </BrowserRouter>
      
    );
  }
}

export default App;

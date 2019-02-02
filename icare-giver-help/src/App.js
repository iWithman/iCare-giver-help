import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dahboard'
import CreatePatient from './components/patients/CreatePatient'
import PatientDetails from './components/patients/PatientDetails'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/create' component={CreatePatient} />
            <Route path='/patient/:id' component={PatientDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

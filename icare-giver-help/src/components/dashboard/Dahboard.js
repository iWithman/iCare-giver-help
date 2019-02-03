import React, { Component } from 'react';
import PatientList from '../patients/PatientList'


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <PatientList />
      </div>
    )
  }
}

export default Dashboard
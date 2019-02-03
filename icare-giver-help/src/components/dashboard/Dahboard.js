import React, { Component } from 'react';
import PatientList from '../patients/PatientList'


class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <PatientList />
      </div>
    )
  }
}

export default Dashboard
import React from 'react'
import PatientSummary from './PatientSummary'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const PatientList = () => {
  return (
    <div className="container mt-5">
      <button className="m-3">
        <Nav.Link><NavLink className="m-2" to="/add">Add Patient</NavLink></Nav.Link>
      </button>
      <div className="row">
        <div className="col-md-6"><PatientSummary /></div>
        <div className="col-md-6"><PatientSummary /></div>
        <div className="col-md-6"><PatientSummary /></div>
        <div className="col-md-6"><PatientSummary /></div>
      </div>
    </div>
  )
}

export default PatientList
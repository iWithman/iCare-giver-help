import React from 'react'
import PatientSummary from './PatientSummary'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { getSavedItems } from '../../scripts/functions'

const patients = getSavedItems('patients')

const Test = ({patients}) => (
  <div className='row'>
    {patients.map(patient => (
      <div className="col-md-6"><PatientSummary patient = {patient} /></div>
    ))}
  </div>
); 

const PatientList = () => {
  return (
    <div className="container mart-5">
      <Nav.Link><NavLink className="m-2" to="/add">Add Patient</NavLink></Nav.Link>
      <div className="row">
        <Test patients={patients} />
      </div>
    </div>
  )
}

export default PatientList
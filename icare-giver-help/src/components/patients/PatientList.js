import React from 'react'
import PatientSummary from './PatientSummary'

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
      <div className="row">
        <Test patients={patients} />
      </div>
    </div>
  )
}

export default PatientList
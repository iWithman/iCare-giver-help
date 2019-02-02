import React from 'react'
import PatientSummary from './PatientSummary'


const PatientList = () => {
  return (
    <div className="container mt-4">
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
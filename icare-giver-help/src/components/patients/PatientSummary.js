import React from 'react'

const PatientSummary = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <span className="card-title">{props.patient.name}</span>
        <p className="card-text">Cared for by {props.patient.caregiver}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a className="btn btn-primary btn-large" href="http://localhost:3000/patient/1">View Patient Detail</a>
      </div>
    </div>
  )
}

export default PatientSummary
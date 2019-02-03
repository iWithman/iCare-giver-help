import React from 'react'

const PatientSummary = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <span className="card-title">{props.patient.name}</span>
        <p className="card-text">Cared for by {props.patient.caregiver}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-success btn-large">View Patient Detail</button>
      </div>
    </div>
  )
}

export default PatientSummary
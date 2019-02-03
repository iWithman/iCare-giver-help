import React from 'react'

const PatientSummary = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <span className="card-title">Patient name</span>
        <p className="card-text">Cared for by DaJuan</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-primary btn-large">View Patient Detail</button>
      </div>
    </div>
  )
}

export default PatientSummary
import React from 'react'
import PatientSummary from './PatientSummary'


const PatientList = () => {
  return (
    <div className="project-list container">
      <PatientSummary />
      <PatientSummary />
      <PatientSummary />
      <PatientSummary />
    </div>
  )
}

export default PatientList
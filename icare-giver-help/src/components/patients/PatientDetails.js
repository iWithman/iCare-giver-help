import React, { Component } from 'react';
import PatientCard from './patientdetails/PatientCard';
import MedTable from './patientdetails/MedTable';
import RateChart from './patientdetails/RateChart';

const PatientDetails = props => {
  const id = props.match.params.id
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Patient's Weight</div>
            <div className="card-body">
              <h5 className="card-title">150lbs</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Patient's Average Blood Presure</div>
            <div className="card-body">
              <h5 className="card-title">120/80</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Patient's Blood Type</div>
            <div className="card-body">
              <h5 className="card-title">O-positive</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <PatientCard id={id}/>
          <RateChart />
          <MedTable />
        </div>
        <div className="col-md-3">
          <div className="card mb-4">
            <div className="card-header">Patient History</div>
            <div className="card-body">
              <ul>
                <li>Patient has a history of hybpertension</li>
                <li>In 2016, Patient was diagnosed with Congestive Heart Failue</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Emergency Contact</div>
            <div className="card-body">
              <ul>
                <li>Son: David Gibbens</li>
                <li>Phone Number: 7548268279</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Patient's Dr's</div>
            <div className="card-body">Dr. Marry Smith</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails
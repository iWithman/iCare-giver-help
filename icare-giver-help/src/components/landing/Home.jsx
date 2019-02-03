import React, { Component } from 'react';

import './Home.css'
import busy_caregiver from '../../assets/caregivers.jpg'
import happy_caregiver from '../../assets/Happy_caregiver.jpg'

const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <header className="main-header">
        <div className="header-content">
          <h1 className="display-1">iCare</h1>
          <p className="lead">Help for the people who care the most</p>
        </div>
      </header>
      <main className='container-fluid'>
        <div className="about-section row text-center d-flex justify-content-between">
          <div className="col-md-12"><h2>About our project</h2></div>
          <div className="col-md-4 img my-3">
            <div className="img__overlay d-flex flex-column">
              <h3>Problem</h3>
              <p>People be gettin old and need caregivers</p>
            </div>
            <img src={busy_caregiver} className="rounded-circle p-0" alt="..." />
          </div>
          <div className="col-md-4 img my-3">
            <div className="img__overlay d-flex flex-column">
              <h3>Solution</h3>
              <p>We help caregivers</p>
            </div>
            <img src={happy_caregiver} className="rounded-circle p-0" alt="..." />
          </div>
          <div className="col-md-4 img my-3">
            <div className="img__overlay d-flex flex-column">
              <h3>Who we are</h3>
              <p>We be flossin</p>
            </div>
            <img src={busy_caregiver} className="rounded-circle p-0" alt="..." />
          </div>
        </div>
      </main>
    </div>
  )
}
 
export default Home;
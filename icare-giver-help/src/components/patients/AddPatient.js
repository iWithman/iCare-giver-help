import React, { Component } from 'react'

import { saveItem } from '../../scripts/functions'
import { getSavedItems } from '../../scripts/functions'

const patients = getSavedItems('patients')

class AddPatient extends Component {
  state = {
    name: '',
    gender: '',
    age: 0,
    phone: 0,
    address: '',
    caregiver: ''

  }

  handleChange =  e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let patient = {
      caregiver: this.state.caregiver,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      phone: this.state.phone,
      address: this.state.address

    }

    patients.push(patient)
    console.log(patients)
    
    saveItem('patients', patients)
  }

  render() {
    return (
      <div className='container mt-5'>
        <h2 className="display-2 text-center">Add a patient</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="caregiver">Caregiver</label>
            <input type="text" id="caregiver" onChange={this.handleChange} className='form-control'/>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Name</label>
            <input type="text" id="name" onChange={this.handleChange} className='form-control'/>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" onChange={this.handleChange} className='form-control'/>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={this.handleChange} className='form-control'/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" onChange={this.handleChange} className='form-control'/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Adress</label>
            <input type="text" id="address" onChange={this.handleChange} className='form-control'/>
          </div>
          <button type="submit" className='btn btn-primary' >Create</button>
        </form>
      </div>
    )
  }
}

export default AddPatient
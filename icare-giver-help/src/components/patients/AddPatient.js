import React, { Component } from 'react'

class AddPatient extends Component {
  state = {
    name: '',
    gender: '',
    age: 0,
    phone: '',
    address: ''

  }

  handleChange =  e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
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
            <input type="text" id="phone" onChange={this.handleChange} className='form-control'/>
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
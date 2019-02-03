import React, { Component } from 'react';

class PatientCard extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          Patient ({this.props.id}) Info
        </div>
        <div className="card-body">
          <div className="container-fluid">
            <div className="row justify-content-start">
              <div className="col-md-12">
                <img src="http://i.pravatar.cc/150?img=69" alt="Patient Picture" className="img-thumbnail rounded-circle"/>
                <h3 className='pt-3'>Ronald Gibbens</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <p className="text-muted">Gender: <span className="text-dark">Male</span></p>
              </div>
              <div className="col-md-6">
                <p className="text-muted">DOB, Age: <span className="text-dark">Aug 20 1952 - (66 years)</span></p>
              </div>
              <div className="col-md-6">
                <p className="text-muted">Phone Number: <span className="text-dark">813-585-5228</span></p>
              </div>
              <div className="col-md-6">
                <p className="text-muted">Address: <span className="text-dark">8107 NW 93rd Ave</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientCard
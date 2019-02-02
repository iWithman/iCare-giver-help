import React, { Component } from 'react';

class MedTable extends Component {
  render(){
    return (
     <div className="card mb-3">
      <div className="card-header">Medicine List</div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Medicine</th>
                <th scope="col">Dosage</th>
                <th scope="col">Quantiy</th>
                <th scope="col">Prescribed By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hydrocortisone</td>
                <td>3 5mg tablets a day</td>
                <td>90 tablets</td>
                <td>Dr. Marie Taylor</td>
              </tr>
              <tr>
                <td>Cetirizine</td>
                <td>1 tablet a day</td>
                <td>30 tablets</td>
                <td>Dr. Frank Smith</td>
              </tr>
              <tr>
                <td>Synthroid </td>
                <td>1 25mcg tablet a day</td>
                <td>60 tablets</td>
                <td>Dr. Marie Taylor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     </div>
    )
  }
}

export default MedTable
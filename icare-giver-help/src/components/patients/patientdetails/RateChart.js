import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class RateChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData:{
        labels: [
          '01/20/2019', 
          '01/21/2019', 
          '01/22/2019', 
          '01/23/2019', 
          '01/24/2019', 
          '01/25/2019', 
          '01/26/2019',
          '01/27/2019', 
          '01/28/2019', 
          '01/29/2019', 
          '01/30/2019', 
          '01/31/2019', 
          '02/01/2019', 
          '02/02/2019'
        ],
        datasets: [
          {
            label: 'BPM', 
            data: [
              77,
              73,
              75,
              80,
              78,
              68,
              72,
              74,
              71,
              81,
              79,
              77,
              67,
              70,
            ],
            borderColor: 'rgba(255, 99, 132, 0.6)',
            fill: false,
            lineTension: 0
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className='card mb-3'>
        <div className="card-header">
          Heart Rate History
        </div>
        <div className="card-body">
          <Line
	          data={this.state.chartData}
            options={{maintainAspectRatio: true}}
          />
        </div>
      </div>
    )
  }
}

export default RateChart
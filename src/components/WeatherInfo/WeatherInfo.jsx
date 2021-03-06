import React, { Component } from 'react';
import '../normalize.css';
import './WeatherInfo.css';

export default class WeatherInfo extends Component {

// If zip is searched then render the searched zip --> city name (for now)
  checkInputZip() {
    if (this.props.allInfo) {
      return (
        <div id="info">
          <h3>-Today's Weather-</h3>
          <h3>{this.props.allInfo.name}</h3>
          <h3>{this.props.allInfo.main.temp}</h3>
          <h3>{this.props.allInfo.weather[0].description}</h3>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  render() {
    return(
      <div>
        {this.checkInputZip()}
      </div>
    )
  }
}





// class WeatherInfo extends Component {
//   render() {
//     return (
//       <div id="data">
//         <h1>City: {this.props.name}</h1>
//         <h2>Temperature: {this.props.main.temp}</h2>
//       </div>
//     )
//   }
// }

// module.exports = WeatherInfo;

import React, { Component } from 'react';
import '../normalize.css';
import './CityInfo.css';

export default class CityInfo extends Component {

// If zip is searched then render the searched zip --> city name (for now)
  cityForecast() {
    if (this.props.gotCity) {
      return (
        <div id="info">
          <h3>-City 5 Day Forecast-</h3>
          <h3>{this.props.gotCity.list[0].dt}</h3>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  render() {
    return(
      <div>
        {this.cityForecast()}
      </div>
    )
  }
}

import React, { Component } from 'react';
import '../normalize.css';
import './CityInfo.css';

export default class CityInfo extends Component {

// If zip is searched then render the searched zip --> city name (for now)
  cityForecast() {
    if (this.props.gotCity) {
      return (
        <div id="city">
          <h3>-City 5 Day Forecast-</h3>


          <div className="days">
            <h3>{this.props.gotCity.list[0].dt_txt}</h3>
            <h3>{this.props.gotCity.list[0].weather[0].description}</h3>
          </div>

          <div className="days">
            <h3>{this.props.gotCity.list[8].dt_txt}</h3>
            <h3>{this.props.gotCity.list[8].weather[0].description}</h3>
          </div>

          <div className="days">
            <h3>{this.props.gotCity.list[16].dt_txt}</h3>
            <h3>{this.props.gotCity.list[16].weather[0].description}</h3>
          </div>

          <div className="days">
            <h3>{this.props.gotCity.list[24].dt_txt}</h3>
            <h3>{this.props.gotCity.list[24].weather[0].description}</h3>
          </div>

          <div className="days">
            <h3>{this.props.gotCity.list[32].dt_txt}</h3>
            <h3>{this.props.gotCity.list[32].weather[0].description}</h3>
          </div>


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

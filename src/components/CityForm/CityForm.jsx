import React, { Component } from 'react';
import '../normalize.css';
import './CityForm.css';

export default class CityForm extends Component {
  render() {
    return(
      <div>
      <link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet" />
        <input
          id="input"
          type="text"
          placeholder="Enter City"
          onChange={this.props.handleInput}  />

        <button onClick={this.props.getCityWeather} id="button" >Search</button>
      </div>
    )
  }
}

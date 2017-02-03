import React, { Component } from 'react';
import '../normalize.css';
import './WeatherForm.css';

export default class WeatherForm extends Component {
  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Zip Zip Zip!"
          onChange={this.props.handleInput}  />

        {/* <button onClick={this.props.handleClick} >Search</button> */}
        <button onClick={this.props.getAllWeather} >Search</button>
      </div>
    )
  }
}

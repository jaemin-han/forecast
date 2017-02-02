import React from 'react';
import Fetch from 'react-fetch';
import '../normalize.css';
import './WeatherForm.css';
import WeatherInfo from '../WeatherInfo/WeatherInfo.jsx';

//API_KEY saved in my .env file
const API_KEY = process.env.WEATHER_API_KEY;

// Fetch API from openweathermap.com
class WeatherForm extends Component {
  constructor() {
    super();
    this.zip = this.props.zip;
    this.url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${API_KEY}`;
  }

  render() {
    return (
      <Fetch
        url={this.url}>
        <WeatherInfo
          zip={this.zip}
        />
      </Fetch>
    )
  };
};

module.exports = WeatherForm;

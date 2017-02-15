import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import WeatherForm from './WeatherForm/WeatherForm.jsx';
import WeatherInfo from './WeatherInfo/WeatherInfo.jsx';
import CityForm from './CityForm/CityForm.jsx';
import CityInfo from './CityInfo/CityInfo.jsx';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      getWeather: [],
      value: '',
      weatherCity: '',
      searched: false,
    };
}

// Get data based on Zip Code
  getAllWeather() {
    // fetch('/api/weather?zip=' + this.state.value)
    fetch('/api/weather', {
      headers: { 'Content-Type' : 'application/json'},
      method: 'POST',
      body: JSON.stringify({zip: this.state.value}),
    })
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({ weatherResult: data });
    })
    .catch(() => res.status(500));
  }

// Get data based on City Name
  getCityWeather() {
    fetch('/search/city', {
      headers: { 'Content-Type' : 'application/json'},
      method: 'POST',
      body: JSON.stringify({cities: this.state.value}),
    })
    .then(r => r.json())
    .then(cityz => {
      console.log(cityz);
      this.setState({ weatherCity: cityz });
    })
    .catch(() => res.status(500));
  }


  // Update Input
  handleInput(e) {
    this.setState({
      value : e.target.value,
    });
  }

  render() {
    return (
      <div id="app-container">
      <link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet" />
        <header>
          <h1 id="highlight">What's the Weather Like Today?</h1>
        </header>
        <div id="center">
          <p>Sup World.</p>

          <WeatherForm
            getAllWeather={this.getAllWeather.bind(this)}
            handleInput={event => this.handleInput(event)}
            // handleClick={() => this.searchZip()}
          />

          <h3>- or -</h3>

          <CityForm
            getCityWeather={this.getCityWeather.bind(this)}
            handleInput={event => this.handleInput(event)}
          />

          <WeatherInfo
            allInfo={this.state.weatherResult}
          />

          <CityInfo
            gotCity={this.state.weatherCity}
          />

          <WeatherDisplay />



        </div>
      </div>
    );
  }
}

export default App;

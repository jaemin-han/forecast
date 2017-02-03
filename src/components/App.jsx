import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import WeatherForm from './WeatherForm/WeatherForm.jsx';
import WeatherInfo from './WeatherInfo/WeatherInfo.jsx'

const API_KEY = process.env.WEATHER_API_KEY;

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


  getAllWeather() {
    fetch('/api/weather')
    .then(r => r.json())
    .then(results => {
      this.setState({
        getWeather : results,
      });
      console.log('getWeather', this.state.getWeather)
    })
    .catch(err => console.log('getAllWeather frontend', err))
  }


  // calls external api => openweathermap.com
  // search using value and save city information to state
  searchZip() {
    this.setState ({
      searched: true,
    })
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=${API_KEY}`)
    .then(r=>r.json())
    .then(weather => {
      console.log('in fetch weather', weather)
      this. setState({
        weatherCity: weather.name,
        // weatherTemp:
      });
      console.log('in fetch states', this.state)
    })
    .catch(err => console.log('searchZip frontend', err));
 }


  // Update Input
  handleInput(e) {
    // console.log('handleInput', e.target.value);
    this.setState({
      titleInput : e.target.value,
    });
  }

  render() {
    return (
      <div id="app-container">
      <link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet" />
        <header>
          <h1>Main Page</h1>
        </header>
        <div id="center">
          <p>Sup World.</p>

          <WeatherForm
          getAllMovies={this.getAllMovies.bind(this)}
            handleInput={event => this.handleInput(event)}
            handleClick={() => this.searchZip()}
          />

          <WeatherInfo
            searched={this.state.searched}
            city={this.state.weatherCity}
          />

        </div>
      </div>
    );
  }
}

export default App;

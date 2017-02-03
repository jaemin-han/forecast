import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import WeatherForm from './WeatherForm/WeatherForm.jsx';
import WeatherInfo from './WeatherInfo/WeatherInfo.jsx'


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
          <h1>Main Page</h1>
        </header>
        <div id="center">
          <p>Sup World.</p>

          <WeatherForm
            getAllWeather={this.getAllWeather.bind(this)}
            handleInput={event => this.handleInput(event)}
            handleClick={() => this.searchZip()}
          />

          <WeatherInfo
            allInfo={this.state.weatherResult}
          />

        </div>
      </div>
    );
  }
}

export default App;

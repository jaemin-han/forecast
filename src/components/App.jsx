import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import WeatherForm from './WeatherForm/WeatherForm.jsx';
// import WeatherInfo from './WeatherInfo/WeatherInfo.jsx'

class App extends Component {
  constructor() {

    super();
    this.state = {value: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    this.setState({value:e.target.value});
  }

 handleSubmit(e) {
    alert('Zipcode Entered: ' + this.state.value);
    e.preventDefault();
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

          <form>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleUpdate}
              placeholder="Check the Weather!"
            />
          </form>

          <button id="submit" value="Submit" onClick={this.handleUpdate}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;

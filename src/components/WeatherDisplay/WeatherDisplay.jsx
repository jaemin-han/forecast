import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreator } from 'redux';
import '../normalize.css';
import './WeatherDisplay.css';

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // Update Input
  handleInput(e) {
    this.setState({
      value : e.target.value,
    });
  }

  // event.preventDefault() method stops the default action of an element from happening
  // i.e. prevent a submit button from submitting a form. Prevent a link from following the URL
  handleFormSubmit(e) {
    event.preventDefault();
    // fetch weather data
    this.props.fetchWeather(this.state.value);
    this.setState({value:''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input
            value={this.state.term}
            onChange={this.handleInput}
            className=""
            placeholder="Let it Rain!"/>
        </div>
          <button submit="submit">Search</button>
      </form>
    )
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreator({ fetchWeather }, dispatch);
}

export default connect(dispatchToProps)(WeatherDisplay);

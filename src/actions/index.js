// Promise based HTTP client for the browser and node.js
// Make XMLHttpRequests from node.js
// Async Actions - the moment I start the call, and the moment
// when you receive an answer
import axios from 'axios';

// API KEY from my .env file
const API_KEY = process.env.WEATHER_API_KEY;
const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${API_ENDPOINT}&q=${city}&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

// Payload is the 'wrapper' to the body -- is something one carries
// Payload body of a HTTP Request -- is the data normally send by a POST or PUT Request

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App.jsx';

// Mount our App at #container
ReactDOM.render(<App />, document.querySelector('#root-container'));

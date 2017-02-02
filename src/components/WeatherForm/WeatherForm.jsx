import React from 'react';
import '../normalize.css';
import './WeatherForm.css';

export default class WeatherForm extends Component {
  render() {
    return(
      <div id={style["search-form"]}>
        <input id={style["input"]}
          type="text"
          placeholder="Zip Zip Zip!"
          onChange={this.props.handleInput}  />

        <button id={style["button"]} onClick={this.props.handleClick} >Search</button>
      </div>
    )
  }
}

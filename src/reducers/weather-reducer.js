import { FETCH_WEATHER } from '../actions/index';

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}

// Action type is to 'get weather' by city
//  Returns a weather info and a copy of a state and populate
// new state with a new weather
// If complete, this passes to the store (index.js file)

import { combineReducers } from 'redux';
import starships from './starships'
import filterStarships from './filterStarships'

export default combineReducers({
  starships,
  filterStarships,
});

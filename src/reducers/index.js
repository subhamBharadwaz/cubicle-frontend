import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;

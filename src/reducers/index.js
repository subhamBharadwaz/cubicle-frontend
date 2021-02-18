import weatherReducer from './weatherReducer';
import newsReducer from './newsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
});

export default rootReducer;

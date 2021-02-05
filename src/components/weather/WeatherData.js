import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../actions/weatherAction';

// Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WeatherData = () => {
  const { weatherInfo } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  // Handlers
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const searchHandler = () => {
    dispatch(fetchWeather(input));
  };

  return (
    <StyledWeatherData>
      <div className='search'>
        Search Icon <h1 onClick={searchHandler}>Search</h1>
      </div>
      <div className='searchCity'>
        <h2>Another City</h2>
        <input onChange={onChangeHandler} value={input} type='text' />
      </div>

      <div className='weather-details'>
        <h2>Weather Details</h2>

        <div className='current-weather-details'>
          <div className='weather-holders'>
            <h3>
              <span>Cloudy</span>
              <span>{`${weatherInfo.clouds.all}%`}</span>
            </h3>
          </div>
          <div className='weather-holders'>
            <h3>
              <span>Humidity</span>
              <span>{`${weatherInfo.main.humidity}%`}</span>
            </h3>
          </div>
          <div className='weather-holders'>
            <h3>
              <span>Wind</span>
              <span>{`${weatherInfo.wind.speed}km/h`}</span>
            </h3>
          </div>
          <div className='weather-holders'>
            <h3>
              <span>Pressure</span>
              <span>{`${weatherInfo.main.pressure}mb`}</span>
            </h3>
          </div>
        </div>
      </div>
    </StyledWeatherData>
  );
};

const StyledWeatherData = styled(motion.div)`
  height: 100%;
  width: 30vw;
  background-color: #fff;
`;

export default WeatherData;

import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../actions/weatherAction';
import {
  dateBuilder,
  ampm,
  hourValue,
  minuteValue,
  curTime,
} from '../../api/time';

// Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Greeting = () => {
  const { weatherInfo } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather('Guwahati'));
  }, [dispatch]);
  return (
    <WeatherGreeting>
      <GreetingData>
        <h3>Good Morning,</h3>
        <h1>Subham</h1>
        <h3>{`${hourValue()}:${minuteValue()}:${ampm}`}</h3>
      </GreetingData>
      <CurrentWeather>
        <h1>
          <div className='temp'>{weatherInfo.main.temp}</div>
          <div className='degree'>°</div>
        </h1>
        <h2>
          <div className='cityName'>{weatherInfo.name}</div>
          <div className='currentDate'>{dateBuilder(new Date())}</div>
        </h2>
        <h3>
          <div className='icon'>
            {weatherInfo.weather.map((data) => (
              <img
                key={data.id}
                src={`http://openweathermap.org/img/w/${data.icon}.png`}
                alt=''
              />
            ))}
          </div>
          <div className='weatherStatus'>
            {weatherInfo.weather.map((data) => data.description)}
          </div>
        </h3>
      </CurrentWeather>
    </WeatherGreeting>
  );
};

const WeatherGreeting = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3vh 7vw;
  flex-wrap: wrap;
`;

const GreetingData = styled(motion.div)`
  font-size: 3vw;
  color: #fff;
  padding: 2vh 0;
  h3 {
    font-size: 2.7vw;
  }
`;

const CurrentWeather = styled(motion.div)`
  display: flex;
  font-size: 1.6vw;
  color: #fff;

  h1 {
    display: flex;
    font-size: 5vw;
  }
  h2,
  h3 {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
  h2 .cityName {
  }
`;

export default Greeting;

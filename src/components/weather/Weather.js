import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../actions/weatherAction';

const Weather = () => {
  const { weatherInfo } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather('Guwahati'));
  }, [dispatch]);
  return (
    <div>
      <div className='greeting'>
        <h3>Good Morning</h3>
      </div>
    </div>
  );
};

export default Weather;

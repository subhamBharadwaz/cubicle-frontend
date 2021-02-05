import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../actions/weatherAction';

const Weather = () => {
  const { weatherInfo } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather('London'));
  }, [dispatch]);
  return <div></div>;
};

export default Weather;

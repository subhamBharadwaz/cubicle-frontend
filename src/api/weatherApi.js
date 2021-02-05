const base_url = 'http://api.openweathermap.org/';
const appid = `&appid=${process.env.REACT_APP_WEATHER_API}`;

export const byCityName = (city) =>
  `${base_url}data/2.5/weather?q=${city}${appid}&units=metric`;

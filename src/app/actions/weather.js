import axios from 'axios'
import { contentHeaders } from './config'

var WEATHER_BASE_URL = 'http://localhost:4030/weather' //[latitude]/[longitude]

export function weatherLoading(bool) {
  return {
    type: 'WEATHER_LOADING',
    weatherIsLoading: bool
  };
}

export function weatherLoaded(forecast) {
  return {
    type: 'WEATHER_FORECAST',
    forecast: forecast
  };
}

export function errorLoadingWeather(bool) {
  return {
    type: 'ERROR_LOADING_WEATHER',
    errorLoadingWeather: bool
  };
}

export function executeWeatherRequest(latitude, longitude) {
    
  const weatherPath = '/'+latitude+'/'+longitude;
  console.log("weatherPath: " + weatherPath);

  const weatherUrl = `${WEATHER_BASE_URL}` + weatherPath;
  //const body = { key: key, latitude: latitude, longitude: longitude};
  //var config = { headers: contentHeaders };
  
  console.log("config: "+JSON.stringify(contentHeaders));

  return (dispatch) => {
    console.log(">1");
    dispatch(weatherLoading(true));
    console.log(">>2");
    var weatherForecast;
    //instance.get(weatherPath)
    axios.get(weatherUrl)
      .then((response) => {
        console.log("response: "+JSON.stringify(response));
        weatherForecast = response.data;

        dispatch(weatherLoaded(weatherForecast))
        dispatch(weatherLoading(false));
        return weatherForecast;
      })
      //.then((response) => response.json())
      .catch((exception) => {
        console.error("Exception getting weather: " + exception);
        dispatch(errorLoadingWeather(true));
      });
  };
}
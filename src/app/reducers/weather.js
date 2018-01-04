
export function forecast(state = null, action) {
  console.log("weatherForecast>> action.type: " + action.type + " action.forecast: " + JSON.stringify(action.forecast))
  switch (action.type) {
    case 'WEATHER_FORECAST':
      return action.forecast
    default:
      return state
  }
}

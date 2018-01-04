import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { executeWeatherRequest } from '../../actions/weather'

class Weather extends Component {
  
  componentDidMount() {
    //this.props.fetchData(this.state.username, this.state.password);
  }
  
  constructor(props) {
    super(props);
    this.state = {latitude: '40.475391', longitude: '-106.820447', forecast: 'No weather yet'};

    this.refreshWeather = this.refreshWeather.bind(this);
  }

  refreshWeather(event) {
    console.log('1');
    console.log('Weather refresh clicked: ' + this.state);
    this.props.refreshWeather(this.state.latitude, this.state.longitude);
    event.preventDefault();
  }

  mapIconToClass (icon) {
    switch (icon) {
      case 'clear-day':
        return 'wi-day-sunny';
      case 'clear-night':
        return 'wi-night-clear';
      case 'partly-cloudy-day':
        return 'wi-day-cloudy';
      case 'partly-cloudy-night':
        return 'wi-night-alt-cloudy';
      default:
        return 'wi-'+icon;
    }
  }

  render() {

      if (this.props.forecast) {


        var icon = this.mapIconToClass(this.props.forecast.currently.icon);

        return (

          <div>
            <div className="weather">
              <i className={'wi '+icon}></i>
              <span>Longitidue: {this.props.forecast.longitude}</span>
              <span>Latititude: {this.props.forecast.latitude}</span>
              <span>Timezone: {this.props.forecast.timezone}</span>
            </div>
            <br/>
            
            <div>{JSON.stringify(this.props.forecast)}</div>
            <br/>
            <button type="button" className="button" onClick={this.refreshWeather}>Refresh</button>
            <br/>
          </div> 

        )
      } else {

        return (
          <div>
            <div>Getting weather...</div>
            <br/>
            <button type="button" className="button" onClick={this.refreshWeather}>Refresh</button>
            <br/>
          </div> 
        )

      } 
  }
}



const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps: "+JSON.stringify(state)); // state
  //console.log("ownProps: "+JSON.stringify(ownProps)); // ownProps
  return {
      latitude: state.latitude,
      longitude: state.longitude,
      forecast: state.forecast
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps"); // state
  return {
      refreshWeather: (latitude, longitude) => dispatch(executeWeatherRequest(latitude, longitude))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
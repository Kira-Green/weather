import React, { Component } from 'react';

import './App.css';
import Day from '../src/Components/Day'


  // prepopulate = () => {
  //   fetch("http://localhost:5000/employees")
  //     .then(response => response.json())
  //     //.then(response => console.log(response))
  //     .then(({ payload }) =>
  //       this.setState(() => ({ employees: payload.employee }))
  //     );
  // };
  let tempMax
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {},
        weather: [],
        main: {}

    }
  }
componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f7c83e4c6e672fa2f63004cc1bb4f95b")
      .then(response => response.json())
      
      .then(response =>
        this.setState(() => ({ data: response, weather: response.weather[0], main: response.main }))
      )
    
  }
  render() {
   
    return (
      <>
      <header><p>Weather App</p></header>
      <div className="App">
          
          <Day dayOfWeek='Monday' dayForecast={this.state.weather.description} dayIcon={'☀️'} highTemperature={this.state.main.temp_max - 273.15} lowTemperature={Math.floor(this.state.main.temp_min - 273.15)}/>
          <Day dayOfWeek='Tuesday' dayForecast='sunny' dayIcon='☀️' highTemperature='High 21' lowTemperature='Low 7'/>
          <Day dayOfWeek='Wednesday' dayForecast='sunny' dayIcon='☀️' highTemperature='High 21' lowTemperature='Low 7'/>
          <Day dayOfWeek='Thursday' dayForecast='sunny' dayIcon='☀️' highTemperature='High 21' lowTemperature='Low 7'/>
          <Day dayOfWeek='Friday' dayForecast='sunny' dayIcon='☀️' highTemperature='High 21' lowTemperature='Low 7'/>
      </div>
      </>
    );
  }
}

export default App;

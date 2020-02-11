import React from 'react';
import '../css/App.css';
import Clock from './Clock'
import { WeatherContainer } from './Weather'

function App() {
  return (
    <div className="App">
      <Clock />
      <WeatherContainer />
    </div>
  );
}

export default App;

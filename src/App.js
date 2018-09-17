import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div id="map"></div>);
  }
}

const script = document.createElement('script');
script.src = process.env.PUBLIC_URL + "/sdk/tomtom.min.js";
script.async = false;
script.onload = function() {
  window.tomtom.L.map('map', {
    source: 'vector',
    key: 'lMerssbNuIOhMi8kW7lNXvphKl3Yiixe',
    center: [37.769167, -122.478468],
    basePath: '/sdk',
    zoom: 15
  });
}
document.body.appendChild(script);

export default App;

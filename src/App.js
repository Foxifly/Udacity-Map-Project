import React, { Component } from 'react';
import './App.css';
import MapBoxTest from "./components/MapBoxTest"

class App extends Component {
  render() {
    return (
    <MapBoxTest/>
  );
  }
}
export default App;

/*
const script = document.createElement('script');
script.src = process.env.PUBLIC_URL + "/sdk/tomtom.min.js";
script.async = false;
script.onload = function() {
  window.tomtom.L.map('map', {
    source: 'vector',
    key: 'lMerssbNuIOhMi8kW7lNXvphKl3Yiixe',
    center: [37.769167, -122.478468],
    basePath: '/sdk',
    zoom: 14
  });
}
document.body.appendChild(script);

export default App;*/

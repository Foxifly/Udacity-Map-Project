import React, { Component } from 'react';
import './App.css';
import MapBox from "./components/MapBox"
import * as YelpAPI from "./util/YelpAPI.js";

class App extends Component {
  state = {
    allShelters: [],
    latitude:0,
    longitude: 0
    }
  componentDidMount() {
    YelpAPI.search("animal shelter", '37.739651', '-121.425224').then((shelters) => {
      console.log(shelters);
      this.setState({allShelters: shelters})
    }).then(()=> {
      console.log("state"  + this.state.allShelters);
    });

  }

  render() {
    return (
    <MapBox
    allShelters={this.state.allShelters}
    latitude={this.state.latitude}
    longitude={this.state.longitudes}
    />
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

import React, { Component } from 'react';
import Map from "./Map";
import MainHeading from "./MainHeading";
import Search from "./Search";
import Results from "./Results";
import PetFinderHorse from './PetFinderHorse';

class MainPage extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/

  render () {
      const { latitude, longitude, results, randHorse, searchLocation, searchCurrentLocation} = this.props;
  return (
    <div className="app">
    <MainHeading/>
    <Map
    results={results}
    latitude={latitude}
    longitude={longitude}
    />
    <Results
    results={results}
    />
    </div>

  )

  }

}

export default MainPage;

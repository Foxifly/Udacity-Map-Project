import React, { Component } from 'react';
import MapBox from "./MapBox";
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
      const { latitude, longitude, results, randHorse, searchLocation} = this.props;
  return (
    <div className="app">
    <MainHeading/>
    <Search
    searchLocation={searchLocation}
    />
    <MapBox
    results={results}
    latitude={latitude}
    longitude={longitude}
    />
    <Results
    results={results}
    />
    <PetFinderHorse
    randHorse={randHorse}
    />
    </div>

  )

  }

}

export default MainPage;

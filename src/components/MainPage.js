import React, { Component } from 'react';
import MapBox from "./MapBox";
import MainHeading from "./MainHeading";
import Search from "./Search";
import Results from "./Results";

class MainPage extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/

  render () {
      const { latitude, longitude, results} = this.props;
  return (
    <div className="app">
    <MainHeading/>
    <Search/>
    <MapBox
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

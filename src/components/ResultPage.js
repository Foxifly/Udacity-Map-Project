import React, { Component } from 'react';
import Map from "./Map";
import MainHeading from "./MainHeading";
import Results from "./Results";
import ResultFocus from "./ResultFocus";
import PropTypes from 'prop-types';

//This component will display on a specific business screen. (once one is selected)
class MainPage extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  render () {
      const { latitude, longitude, results } = this.props;
  return (
    <div className="app">
    <MainHeading/>
    <Map
    results={results}
    latitude={latitude}
    longitude={longitude}
    />
    <ResultFocus

    />
    <Results
    results={results}
    />
    </div>

  )

  }

}

export default MainPage;

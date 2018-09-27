import React, { Component } from 'react';
import Results from "./Results";
import ResultFocus from "./ResultFocus";
import PropTypes from 'prop-types';
import BackButton from "./BackButton";

//This component will display on a specific business screen. (once one is selected)
class MainPage extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  render () {
      const { results, resultClicked, handleCurrBusiness } = this.props;
  return (
    <div className="app">
    <BackButton/>
    <ResultFocus
    resultClicked={resultClicked}
    />
    <Results
    handleCurrBusiness={handleCurrBusiness}
    results={results}
    />
    </div>

  )

  }

}

export default MainPage;

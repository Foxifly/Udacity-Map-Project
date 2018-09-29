import React, { Component } from 'react';
import Results from "./Results";
import ResultFocus from "./ResultFocus";
import PropTypes from 'prop-types';
import BackButton from "./BackButton";

//This component will display on a specific business screen. (once one is selected)
class ResultPage extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  render () {
      const { results, resultClicked, handleCurrBusiness, isYelpError, updateYelpBool} = this.props;
  return (

    <div>
    <BackButton/>
    <ResultFocus
    resultClicked={resultClicked}
    />
    <Results
    isYelpError={isYelpError}
    updateYelpBool={updateYelpBool}
    handleCurrBusiness={handleCurrBusiness}
    results={results}
    />
    </div>

  )

  }

}

export default ResultPage;

import React, { Component } from 'react';
import Results from "./Results";
import ResultFocus from "./ResultFocus";
import PropTypes from 'prop-types';
import BackButton from "./BackButton";
import ErrorHandle from "./ErrorHandle";

/**
 * @description //This component will display on a specific business screen. (once one is selected)
 * @returns {HTML} Returns the info page for the result component
 */
class ResultPage extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };

  /**
   * @description Renders the ResutFocus and Result components. 
   * @returns {HTML} Returns the info page for the result component
   */
  render () {
      const { results, resultClicked, handleCurrBusiness, isYelpError, updateYelpBool} = this.props;
  return (

    <div>

    <BackButton/>

    <ErrorHandle
    whereError="this result"
    >
      <ResultFocus
        resultClicked={resultClicked}
      />
    </ErrorHandle>

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

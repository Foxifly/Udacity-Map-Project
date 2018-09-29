import React, { Component } from "react";
import Results from "./Results";
import PetFinderHorse from "./PetFinderHorse";
import PropTypes from "prop-types";

/**
 * @description The main page component pulls in all the components to display them together on App.js.
 */
class MainPage extends Component {
  
  /**
   * @description Declaring proptypes for the MainPage component.
   */
  static propTypes = {
    results: PropTypes.array.isRequired,
    randHorse: PropTypes.object.isRequired,
    handleCurrBusiness: PropTypes.func.isRequired,
    updateBool: PropTypes.func.isRequired
  };

  /**
   * @description The render method renders the main heading and footer, the search bar, the map, the results, and the petfinder horse.
   * @returns {HTML} Returns the HTML for the other components.
   */
  render() {

    const {
      results,
      randHorse,
      handleCurrBusiness,
      isYelpError,
      updateBool
    } = this.props;

    return (
      <div aria-labelledby="result-header" aria-describedby="result-info">
        <Results results={results} handleCurrBusiness={handleCurrBusiness}  isYelpError={isYelpError}
            updateBool={updateBool} />
        <PetFinderHorse randHorse={randHorse} />
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import Results from "./Results";
import PetFinderHorse from "./PetFinderHorse";
import PropTypes from "prop-types";

//The main page component pulls in all the components to display them together on App.js.
class MainPage extends Component {
  //Declaring proptypes for the main page component.
  static propTypes = {
    results: PropTypes.array.isRequired,
    randHorse: PropTypes.object.isRequired,
    handleCurrBusiness: PropTypes.func.isRequired
  };

  //The render method renders the main heading and footer, the search bar, the map, the results, and the petfinder horse.
  render() {
    const {
      results,
      randHorse,
      handleCurrBusiness
    } = this.props;
    return (
      <div className="app">
        <Results results={results} handleCurrBusiness={handleCurrBusiness} />

        <PetFinderHorse randHorse={randHorse} />
      </div>
    );
  }
}

export default MainPage;

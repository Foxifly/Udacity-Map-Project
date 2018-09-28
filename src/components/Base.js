import React, { Component } from "react";
import Map from "./Map";
import MainHeading from "./MainHeading";
import Search from "./Search";
import PropTypes from "prop-types";

//The main page component pulls in all the components to display them together on App.js.
class Base extends Component {
  //Declaring proptypes for the main page component.
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    searchLocation: PropTypes.func.isRequired,
    searchCurrentLocation: PropTypes.func.isRequired
  };

  //The render method renders the main heading and footer, the search bar, the map, the results, and the petfinder horse.
  render() {
    const {
      latitude,
      longitude,
      results,
      searchLocation,
      searchCurrentLocation,
      isLocationError,
      updateLocationBool
    } = this.props;
    return (
      <div className="app">

        <MainHeading />

        <Search
          searchLocation={searchLocation}
          searchCurrentLocation={searchCurrentLocation}
          isLocationError={isLocationError}
          updateLocationBool={updateLocationBool}
        />

        <Map results={results} latitude={latitude} longitude={longitude} />

      </div>
    );
  }

}


export default Base;

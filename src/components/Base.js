import React, { Component } from "react";
import Map from "./Map";
import MainHeading from "./MainHeading";
import Search from "./Search";
import PropTypes from "prop-types";
import ErrorHandle from "./ErrorHandle";

/**
 * @description The main page component pulls in all main the components to display them together on App.js. These components are the same between all routes.
 */
class Base extends Component {
  /**
   * @description Declaring proptypes for the main page component.
   */
  static propTypes = {
    results: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    searchLocation: PropTypes.func.isRequired,
    searchCurrentLocation: PropTypes.func.isRequired,
    isLocationError: PropTypes.bool.isRequired,
    updateBool: PropTypes.func.isRequired,
    currClickedID: PropTypes.string,
  };

  /**
   * @description The render method of this component renders the main heading and footer, the search bar, the map, the results, and the petfinder horse. All of these sub-components stay consistent throughout all routes.
   */
  render() {

    const {
      latitude,
      longitude,
      results,
      searchLocation,
      searchCurrentLocation,
      isLocationError,
      updateBool,
      currClickedID
    } = this.props;

    return (
      <div aria-labelledby="main-header">

        <MainHeading />

        <ErrorHandle
        whereError="your search"
        >
        <Search
          searchLocation={searchLocation}
          searchCurrentLocation={searchCurrentLocation}
          isLocationError={isLocationError}
          updateBool={updateBool}
        />
        </ErrorHandle>

        <ErrorHandle
        whereError="the Map"
        >
        <Map
          currClickedID={currClickedID}
          results={results}
          latitude={latitude}
          longitude={longitude}
        />
        </ErrorHandle>

      </div>
    );
  }
}

export default Base;

import React, { Component } from 'react';
import MapBox from "./MapBox";
import MainHeading from "./MainHeading";
import Search from "./Search";

class MainPage extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/

  render () {
      const { latitude, longitude, horseRiding} = this.props;
  return (
    <div class="app">
    <MainHeading/>
    <Search/>
    <MapBox
    horseRiding={horseRiding}
    latitude={latitude}
    longitude={longitude}
    />
    </div>
  )

  }

}

export default MainPage;

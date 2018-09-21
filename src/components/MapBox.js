import React, { Component } from "react";
import MapMarker from "./MapMarker";
const { compose, withProps, withStateHandlers } = require("recompose");
// const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-INT064z7lqsdPjrwblPA1Wp9hQwU5A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    center={{ lat: props.latitude, lng: props.longitude }}
  >
    {props.results &&
      props.results !== "Error" &&
      props.results.map(result => {
        return <MapMarker result={result} />;
      })}
  </GoogleMap>
));

class MapBox extends Component {
  state = {
    latitude: 30,
    longitude: -30,
    results: [],

  };
  componentDidMount() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.setState(
        {
          latitude: nextProps.latitude,
          longitude: nextProps.longitude,
          results: nextProps.results
        }
      );
    }
  }

  render() {
    return (
      <MapWithAMarkerClusterer
        results={this.state.results}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
      />
    );
  }
}

export default MapBox;

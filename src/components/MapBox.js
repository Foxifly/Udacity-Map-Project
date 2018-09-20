import React, { Component } from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
//
// class MapBox extends Component {
//   render() {
//     const GMaps = withScriptjs(withGoogleMap(props => {
//   return ( <GoogleMap
//  defaultZoom={12}
//  defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
// >
//  <Marker
//    position={{ lat: this.props.latitude, lng: this.props.longitude }}
//  />
// </GoogleMap>)
// }))
//     return(
//       GMaps
//     )
//   }
// }
//
//
//
// export default MapBox;
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-INT064z7lqsdPjrwblPA1Wp9hQwU5A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >

      {props.results &&
        props.results.map(result => {
          console.log("result " + result);
          return (
            <Marker
              key={1}
              position={{
                lat: result.coordinates.latitude,
                lng: result.coordinates.longitude
              }}
            />
          );
        })}
    </MarkerClusterer>
  </GoogleMap>
));

class MapBox extends Component {
  state = {
    markers: [],
    latitude: 30,
    longitude: -30,
    results: []
  };
  componentWillMount() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude
    });
  }

  componentWillReceiveProps() {
    this.setState({ results: this.props.results }, function(c) {
      console.log(this.state.results);
    });
  }

  render() {
    console.log(this.props.results);
    return (
      <MapWithAMarkerClusterer
      results={this.state.results}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
        markers={this.state.markers}
      />
    );
  }
}

/*{
        results.map((shelter)=> {
          console.log(shelter.coordinates.latitude, shelter.coordinates.longitude);
          console.log(shelter);
          return (<Marker key={shelter.id} coordinates={[shelter.coordinates.longitude, shelter.coordinates.latitude]} anchor="bottom">
          <div className="mapMarkerStyle" />
          </Marker>)
*/

export default MapBox;

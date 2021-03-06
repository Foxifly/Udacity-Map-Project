import React, { Component } from "react";
import MapMarker from "./MapMarker";

/**
 * @description Importing the react-google-maps dependencies.
 */
const { compose, withProps } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

/**
 * @description The Google Map loader. Connects with my API key to google maps and displays a map based on the state of App.js
 */
const GMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=<GOOGLE MAPS API KEY HERE>.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap

)((props) => (

  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    center={{ lat: props.latitude, lng: props.longitude }}
  >

    {props.results &&
      props.results !== "Error" &&
      !props.currClicked &&
      props.results.map(result => {
        return <MapMarker key={result.id} result={result} />;
      })}

    {props.results &&
      props.results !== "Error" &&
      props.currClicked &&
      props.results.map(result => {
        if (props.currClicked !== result.id) {
          return (
            <MapMarker key={result.id} result={result} isClicked={false} />
          );
        } else {
          return <MapMarker key={result.id} result={result} isClicked={true} />;
        }
      })}

  </GoogleMap>
));

/**
 * @description The map component that passes the state into the gMap component to display the map at the user's location.
 */
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 30,
      longitude: -30,
      results: [],
      currClickedID: null,
      isAPIError: false,
    };
    this.closeModal = this.closeModal.bind(this);

  }

  /**
   * @description Waits for the component to mount, then sets the state of the latitude and longitude
   */
  componentDidMount() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      currClickedID: this.props.currClickedID
    });

    window.gm_authFailure = () => {
      this.setState({isAPIError: true})
    };
  }

  closeModal() {
    this.setState({
      isAPIError: false
    })
  }

  componentDidCatch() {
    this.setState({
      isAPIError: true
    })
  }

  /**
   * @description Monitors the state on every prop update. if they differ, this will force the map to update to the lat and long / results.
   * @param nextProps once the component updates, it passes nextprops which is a (perhaps) new value for the props passed.
   */
  componentWillUpdate(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        latitude: nextProps.latitude,
        longitude: nextProps.longitude,
        results: nextProps.results,
        currClickedID: nextProps.currClickedID
      });
    }
  }

  /**
   * @description The render method renders the gMap component and footer, the search bar, the map, the results, and the petfinder horse.
   * @returns {HTML} Returns the HTML for the google map
   */
  render() {
    return (
      <div role="application" aria-label="map">

      {this.state.isAPIError &&
      <div aria-hidden={!this.state.isAPIError} className="location-modal">
      <div aria-labelledby="error" aria-describedby="invalid-input" className="location-modal-content"><h3 id="error">ERROR</h3>
      <p id="invalid-input" className="invalid-input">{"The Google Maps API Key is either missing or invalid. Please contact the website's administrator for further assistance. "}</p>
      <button autoFocus={true}  className="invalid-input-button" onClick={this.closeModal}>Close</button>
      </div></div>
    }


        <GMap
          results={this.state.results}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          currClicked={this.state.currClickedID}
        />
      </div>
    );
  }
}

export default Map;

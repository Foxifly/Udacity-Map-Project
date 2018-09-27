import React, { Component } from "react";
import PropTypes from "prop-types";
const { Marker, InfoWindow } = require("react-google-maps");


//Displays all the markers on the generated googlemap.
class MapMarker extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired
  };

  //Need to bind handleClick with this otherwise this will be undefined.
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: '4'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //The handleClick method runs when the marker has been clicked - it opens/closes the info window.
  handleClick() {
    this.setState(state => ({
      open: !this.state.open
    }));
    if (this.state.open) {
      this.setState({
        animation: '1'
      })
    } else {
      this.setState({
        animation: '4'
      })
    }
  }

  //The render method for the markers takes each result and inserts a mapmarker at those coordinates. If the marker is clicked, the info window will appear and display brief info about the location. Clicking the marker will also display detained info about the venue.
  render() {
    const { result } = this.props;
    return (
      <div>
        <Marker
          animation={this.state.animation}
          onClick={this.handleClick}
          position={{
            lat: result.coordinates.latitude,
            lng: result.coordinates.longitude
          }}

        >

          {this.state.open && (
            <InfoWindow onCloseClick={this.handleClick}>
              <div>
                <strong>{result.name}</strong>
                <br /> <br />
                {result.location.address1}
                {result.location.address2} <br />
                {result.location.city},
                {result.location.state}
                {result.location.zip_code}
                <br />
                <br />
                {result.display_phone}
              </div>
            </InfoWindow>
          )}

        </Marker>
      </div>
    );
  }
}

export default MapMarker;

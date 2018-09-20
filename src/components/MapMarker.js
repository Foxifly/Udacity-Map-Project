import React, { Component } from "react";
const { Marker, InfoWindow } = require("react-google-maps");

class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      open: !this.state.open
    }));
  }

  render() {
    return (
      <div>
        <Marker
          key={this.props.result.id}
          onClick={this.handleClick}
          position={{
            lat: this.props.result.coordinates.latitude,
            lng: this.props.result.coordinates.longitude
          }}
        >
          {this.state.open && (
            <InfoWindow onCloseClick={this.handleClick}>
              <div>
                <strong>{this.props.result.name}</strong>
                <br /> <br />
                {this.props.result.location.address1}
                {this.props.result.location.address2} <br />
                {this.props.result.location.city},
                {this.props.result.location.state}
                {this.props.result.location.zip_code}
                <br />
                <br />
                {this.props.result.display_phone}
              </div>
            </InfoWindow>
          )}
        </Marker>
      </div>
    );
  }
}

export default MapMarker;

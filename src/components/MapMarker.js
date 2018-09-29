import React, { Component } from "react";
import PropTypes from "prop-types";
const { Marker, InfoWindow } = require("react-google-maps");

/**
 * @description  Displays all the markers on the generated googlemap.
 */
class MapMarker extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired
  };

  /**
   * @description  Binds the click to handleClick and manages state.
   */
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      animation: '4'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * @description  The handleClick method runs when the marker has been clicked - it opens/closes the info window.
   */
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

  /**
   * @description Monitors the state on every prop update. if they differ, this will force the markers to update to the lat and long / results.
   * @param nextProps once the component updates, it passes nextprops which is a (perhaps) new value for the props passed.
   */
  componentWillUpdate(nextProps) {
    console.log(nextProps.isClicked, this.props.isClicked)
    if (nextProps.isClicked !== this.props.isClicked) {
      if (nextProps.isClicked) {
        this.setState({
          animation: '1',
          open: true
        });
      } else {
        this.setState({
          animation: '4',
          open: false
        });
      }

    }
  }

  /**
   * @description Monitors the state on every prop update. if they differ, this will force the markers to update to the lat and long / results.
   * @returns the HTML markup for the markers and info windows.
   */
  render() {
    const { result } = this.props;
    return (

      <div tabIndex="-1">
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
              <div aria-hidden={!this.state.open} tabIndex="-1">
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

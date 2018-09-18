import React, {Component} from 'react';
import ReactMapboxGl, { Marker} from "react-mapbox-gl";
import mapboxStyle from '../util/MapBox/mapbox-streets-v9.json';
import PropTypes from 'prop-types';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZm94aWZseSIsImEiOiJjamx1YWtkamEwaWNiM3BwZW9qZTJmOG9oIn0.U__Nwr8mBBQkYg3BUlH1xQ"
});
class MapBox extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/
  render () {
    const { latitude, longitude, horseRiding} = this.props;
  return (
    <Map
      center={[longitude, latitude]}
      zoom={[10]}
      style={mapboxStyle}
      >

      {
        horseRiding.map((shelter)=> {
          console.log(shelter.coordinates.latitude, shelter.coordinates.longitude);
          console.log(shelter);
          return (<Marker key={shelter.id} coordinates={[shelter.coordinates.longitude, shelter.coordinates.latitude]} anchor="bottom">
          <div className="mapMarkerStyle" />
          </Marker>)
        })
      }

    </Map>
  )

  }

}

export default MapBox;

import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZm94aWZseSIsImEiOiJjamx1YWtkamEwaWNiM3BwZW9qZTJmOG9oIn0.U__Nwr8mBBQkYg3BUlH1xQ"
});
class MapBox extends Component {

  render () {
  return (
    <Map
      center={[-121.425224, 37.739651]}
      zoom={[8]}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "50vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-121.425224, 37.739651]}/>
        </Layer>
    </Map>
  )

  }

}

export default MapBox;

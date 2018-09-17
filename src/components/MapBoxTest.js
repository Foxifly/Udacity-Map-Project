import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZm94aWZseSIsImEiOiJjamx1YWtkamEwaWNiM3BwZW9qZTJmOG9oIn0.U__Nwr8mBBQkYg3BUlH1xQ"
});
class MapBoxTest extends Component {

  render () {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "50vh",
        width: "50vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </Map>
  )

  }

}

export default MapBoxTest;

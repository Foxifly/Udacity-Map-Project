import React, { Component } from 'react';
import './App.css';
import MapBox from "./components/MapBox"
import * as YelpAPI from "./util/YelpAPI.js";

class App extends Component {
  state = {
    horseBoarding: [],
    horseRiding: [],
    horseEquipment: [],
    horseRacing: [],
    farrier: [],
    petPhotography: [],

    latitude:0,
    longitude: 0
    }

    //To stop too many YELP requests, we will only load horse riding when a user first visits the site.
  componentDidMount() {
    YelpAPI.search("horse_riding" ,"horseriding", '37.739651', '-121.425224').then((riding) => {
      console.log(riding);
      this.setState({horseRiding: riding})
    }).then(()=> {
      console.log("state"  + this.state.horseRiding);
    });

  }

  render() {
    return (
    <MapBox
    horseRiding={this.state.horseRiding}
    latitude={this.state.latitude}
    longitude={this.state.longitudes}
    />
  );
  }
}
export default App;

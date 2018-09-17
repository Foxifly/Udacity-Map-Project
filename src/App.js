import React, { Component } from 'react';
import './App.css';
import MapBox from "./components/MapBox"
import * as YelpAPI from "./util/YelpAPI.js";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    horseBoarding: [],
    horseRiding: [],
    horseEquipment: [],
    horseRacing: [],
    farrier: [],
    petPhotography: [],
    vet: [],
    latitude:0,
    longitude: 0
    }

  //To stop too many YELP requests, we will only load horse riding when a user first visits the site.
  componentDidMount() {
    YelpAPI.search("horse_riding" ,"horseriding", '37.739651', '-121.425224', "best_match").then((horseRiding) => {
      this.setState({horseRiding})
    });
  }

  getHorseBoarding = (latitude, longitude, sort) => {
    YelpAPI.search("horse_boarding" ,"horse_boarding", latitude, longitude, sort).then((horseBoarding) => {
      this.setState({horseBoarding})
    });
  }

  getHorseRiding = (latitude, longitude, sort) => {
    YelpAPI.search("horse_riding" ,"horseriding", latitude, longitude, sort).then((horseRiding) => {
      this.setState({horseRiding})
    });
  }

  getHorseEquipment = (latitude, longitude, sort) => {
    YelpAPI.search("tack" ,"horseequipment", latitude, longitude, sort).then((horseEquipment) => {
      this.setState({horseEquipment})
    });
  }
  getHorseRacing = (latitude, longitude, sort) => {
    YelpAPI.search("horse_racing" ,"horseracing", latitude, longitude, sort).then((horseRacing) => {
      this.setState({horseRacing})
    });
  }
  getFarrier = (latitude, longitude, sort) => {
    YelpAPI.search("farrier" ,"farrier", latitude, longitude, sort).then((farrier) => {
      this.setState({farrier})
    });
  }
  getPetPhotography = (latitude, longitude, sort) => {
    YelpAPI.search("pet_photography" ,"petphotography", latitude, longitude, sort).then((petPhotography) => {
      this.setState({petPhotography})
    });
  }

  getVets = (latitude, longitude, sort) => {
    YelpAPI.search("vet" ,"vets", latitude, longitude, sort).then((vet) => {
      this.setState({vet})
    });
  }
  render() {
    return (
      <div>


        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                {this.state.horseRiding && (
                  <div>
                    {
                      <MapBox
                      horseRiding={this.state.horseRiding}
                      latitude={this.state.latitude}
                      longitude={this.state.longitudes}
                      />
                    }
                  </div>
                )}
              </div>
            );
          }}
        />

        <Route
          path="/search"
          render={( {history}) => {
            return (
              <div className="app">
                <h1>Hello</h1>
              </div>
            );
          }}
        />


      </div>
    );
  }
}
export default App;

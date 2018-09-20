import React, { Component } from 'react';
import './App.css';
import MainPage from "./components/MainPage"
import * as YelpAPI from "./util/YelpAPI.js";
import * as PetFinder from "./util/PetfinderAPI.js";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    results: [],
    randHorse: [],
    horseBoarding: [],
    horseRiding: [],
    horseEquipment: [],
    horseRacing: [],
    farrier: [],
    petPhotography: [],
    vet: [],
    latitude: 37.7749,
    longitude: -122.4194
    }
  componentWillMount() {
      PetFinder.petRandom().then((randHorse)=> {
        this.setState({randHorse })
      })
      this.locateUser();

    }
  //To stop too many YELP requests, we will only load horse riding when a user first visits the site.
  locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
      YelpAPI.search("horse_riding" ,"horseriding", this.state.latitude, this.state.longitude, "best_match").then((results) => {
        if (results === "Error") {
          this.setState({results: "Error"}, function(c) {
            console.log(this.state.results)
          })
        }
        this.setState({results})
      });
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
                      <MainPage
                      randHorse={this.state.randHorse}
                      results={this.state.results}
                      latitude={this.state.latitude}
                      longitude={this.state.longitude}
                      />
                    }
                  </div>
                )}
              </div>
            );
          }}
        />

        <Route
          path="/info"
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

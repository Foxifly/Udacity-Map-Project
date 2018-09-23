import React, { Component } from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ResultPage from "./components/ResultPage"
import * as YelpAPI from "./util/YelpAPI.js";
import * as HereAPI from "./util/HereAPI.js";
import * as PetFinder from "./util/PetfinderAPI.js";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      randHorse: {},
      latitude: 37.7749,
      longitude: -122.4194
      }
    this.searchLocation = this.searchLocation.bind(this);
    this.searchCurrentLocation = this.searchCurrentLocation.bind(this);
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
        console.log(results);
        if (results === "Error") {
          this.setState({results: "Error"})
        }
        this.setState({results})
      });
    });
  }

  searchLocation(toSearch, category, keyword) {
    HereAPI.searchForLocation(toSearch).then((result) => {
      if (result) {
        this.setState({
          latitude: result.latitude,
          longitude: result.longitude
        }, function(c) {
          this.getNewSearchTopic(keyword, category, this.state.latitude, this.state.longitude, "best_match");
        })
      }

    })
  }

  searchCurrentLocation(toSearch, category, keyword) {
          this.getNewSearchTopic(keyword, category, this.state.latitude, this.state.longitude, "best_match");

  }
  getNewSearchTopic = (keyword, category, latitude, longitude, sort) => {
    YelpAPI.search(keyword, category, latitude, longitude, sort).then((results) => {
      this.setState({results})
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
                {this.state.results && (
                  <div>
                    {
                      <MainPage
                      searchLocation={this.searchLocation}
                      searchCurrentLocation={this.searchCurrentLocation}
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
              <div>
              <ResultPage
              searchLocation={this.searchLocation}
              searchCurrentLocation={this.searchCurrentLocation}
              results={this.state.results}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              />
              </div>
            );
          }}
        />


      </div>
    );
  }
}
export default App;

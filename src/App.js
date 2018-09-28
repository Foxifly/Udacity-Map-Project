import React, { Component } from "react";
import "./App.css";
import Base from "./components/Base";
import MainPage from "./components/MainPage";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";
import * as YelpAPI from "./util/YelpAPI.js";
import * as HereAPI from "./util/HereAPI.js";
import * as PetFinder from "./util/PetfinderAPI.js";
import { Route } from "react-router-dom";

/* import { Link } from "react-router-dom";
<Link className="close-search" to="/">
  Close
</Link>
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      randHorse: {},
      latitude: 37.7749,
      longitude: -122.4194,
      resultClicked: [],
      isLocationError: false
    };
    this.searchLocation = this.searchLocation.bind(this);
    this.searchCurrentLocation = this.searchCurrentLocation.bind(this);
    this.handleCurrBusiness = this.handleCurrBusiness.bind(this);
    this.updateLocationBool = this.updateLocationBool.bind(this);
  }

  componentWillMount() {
    PetFinder.petRandom().then(randHorse => {
      this.setState({ randHorse });
    });
    this.locateUser();
  }

  //To stop too many YELP requests, we will only load horse riding when a user first visits the site.
  locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });
      YelpAPI.search(
        "horse_riding",
        "horseriding",
        this.state.latitude,
        this.state.longitude,
        "best_match"
      ).then(results => {
        if (results === "Error") {
          this.setState({ results: "Error" });
        } else {
          this.setState({ results: results, resultClicked: results[0] })
        }
    });
  })
}

  searchLocation(toSearch, category, keyword) {
    HereAPI.searchForLocation(toSearch).then(result => {
      this.setState(
        {
          isLocationError: false
        })
      if (result && result !== "Error") {
        this.setState(
          {
            isLocationError: false,
            latitude: result.latitude,
            longitude: result.longitude
          },
          function(c) {
            this.getNewSearchTopic(
              keyword,
              category,
              this.state.latitude,
              this.state.longitude,
              "best_match"
            );
          }
        );
      } else if (result === "Error") {
        this.setState({isLocationError: true})
      }
    });
  }

  searchCurrentLocation(toSearch, category, keyword) {
    this.getNewSearchTopic(
      keyword,
      category,
      this.state.latitude,
      this.state.longitude,
      "best_match"
    );
  }
  getNewSearchTopic = (keyword, category, latitude, longitude, sort) => {
    YelpAPI.search(keyword, category, latitude, longitude, sort).then(
      results => {
        this.setState({ results });
      }
    );
  };
  handleCurrBusiness(currClicked) {
    this.setState({
      resultClicked: currClicked
    });
  }

  updateLocationBool() {
    this.setState({
      isLocationError: false
    })
  }

  render() {
    return (
      <div>
        <Base
          isLocationError={this.state.isLocationError}
          updateLocationBool={this.updateLocationBool}
          searchLocation={this.searchLocation}
          searchCurrentLocation={this.searchCurrentLocation}
          results={this.state.results}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />

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
                        handleCurrBusiness={this.handleCurrBusiness}
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
          render={({ history }) => {
            return (
              <div>
                <ResultPage
                  handleCurrBusiness={this.handleCurrBusiness}
                  resultClicked={this.state.resultClicked}
                  results={this.state.results}
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                />
              </div>
            );
          }}
        />
        <Footer/>
      </div>
    );
  }
}
export default App;

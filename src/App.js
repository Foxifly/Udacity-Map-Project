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

class App extends Component {
  /**
   * @description Manages the state and props of the component and binds the click functions to this so it's defined.
   * @param {props} props of the component
   */
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      randHorse: {},
      latitude: 37.7749,
      longitude: -122.4194,
      resultClicked: [],
      isLocationError: false,
      currClickedID: null,
      isYelpError: false
    };
    this.searchLocation = this.searchLocation.bind(this);
    this.searchCurrentLocation = this.searchCurrentLocation.bind(this);
    this.handleCurrBusiness = this.handleCurrBusiness.bind(this);
    this.updateBool = this.updateBool.bind(this);
  }

  /**
   * @description Once the component mounts, the app will locate the user and find a random horse for adoption to display at the bottom.
   */
  componentWillMount() {
    PetFinder.petRandom().then(randHorse => {
      this.setState({ randHorse });
    });
    this.locateUser();
  }

  /**
   * @description Asks the end user if the app can use their current location. If it's allowed, it will set the location and query yelp.
   */
  locateUser() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      });

      /**
       * @description Queries Yelp with horse riding search.
       * @param {string} term
       * @param {string} category
       * @param {number} latitude
       * @param {number} longitude
       * @param {string} sort
       * @returns {results} The results of the query.
       */
      YelpAPI.search(
        "horse_riding",
        "horseriding",
        this.state.latitude,
        this.state.longitude,
        "best_match"
      ).then(results => {
        if (results === "Error") {
          this.setState({ results: "Error", isYelpError: true });
        } else if (results && results[0]) {
          this.setState({
            results: results,
            resultClicked: results[0],
            currClickedID: results[0].id
          });
        }
      });
    });
  }

  /**
   * @description Uses the keyword that the user input to search for a location. The HERE API will take this input and convert it into a lat and long if the location is found
   * @param {string} toSearch the location to search
   * @param {string} category the category of the horse activity
   * @param {string} keyword the preset key word corresponding to the horse category
   * @returns {results} The results of the location which is then used to query yelp for the results.
   */
  searchLocation(toSearch, category, keyword) {
    HereAPI.searchForLocation(toSearch).then(result => {
      this.setState({
        isLocationError: false
      });
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
        this.setState({ isLocationError: true });
      }
    });
  }

  /**
   * @description If the user has selected to use their current location, and not change the original starting location, this allows the user to search again without having to reenter anything.
   * @param {string} toSearch the location to search
   * @param {string} category the category of the horse activity
   * @param {string} keyword the preset key word corresponding to the horse category
   * @returns {results} The results of the location which is then used to query yelp for the results.
   */
  searchCurrentLocation(toSearch, category, keyword) {
    this.getNewSearchTopic(
      keyword,
      category,
      this.state.latitude,
      this.state.longitude,
      "best_match"
    );
  }

  /**
   * @description Queries yelp to find horse-related results for the search.
   * @param {string} keyword The predefined keyword for the horse related topic.
   * @param {string} category the category of the horse activity
   * @param {string} latitude the location's latitude
   * @param {string} longitude the location's longitude
   * @param {string} sort The sort preferences for the yelp search - best_match.
   * @returns {results} The results of the yelp search query.
   */
  getNewSearchTopic = (keyword, category, latitude, longitude, sort) => {
    YelpAPI.search(keyword, category, latitude, longitude, sort).then(
      results => {
        this.setState({ results });
      }
    );
  };

  /**
   * @description Monitors which business was currently clicked, and sets the state depending on what was clicked.
   * @param {object} currClicked The business that had "more info" clicked on it - makes the marker bounce.
   */
  handleCurrBusiness(currClicked) {
    this.setState({
      resultClicked: currClicked,
      currClickedID: currClicked.id
    });
  }

  /**
   * @description Negates the state of isLocationError, isYelpError to make the modal close.
   */
  updateBool(boolType) {
    switch (boolType) {
      case "location":
      this.setState({
        isLocationError: false
      });
        break;
      case "yelp":
      this.setState({
        isYelpError: false
      });
      break;
      default:
      break;
    }
  }

  /**
   * @description The rendering of all the components and routes: Base, MainPage, ResultPage and Footer.
   */
  render() {
    return (
      <main>
        <Base
          currClickedID={this.state.currClickedID}
          isLocationError={this.state.isLocationError}
          updateBool={this.updateBool}
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
              <div aria-labelledby="main-header">
                    {
                      <MainPage
                        isYelpError={this.state.isYelpError}
                        updateBool={this.updateBool}
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
            );
          }}
        />

        <Route
          path="/info"
          render={({ history }) => {
            return (
              <div aria-labelledby="main-header">
                <ResultPage
                  isYelpError={this.state.isYelpError}
                  updateYelpBool={this.updateYelpBool}
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
        <Footer />
      </main>
    );
  }
}
export default App;

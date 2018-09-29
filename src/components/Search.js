import React, { Component } from "react";

class Search extends Component {

  //needed to bind these functions or else this will be undefined.
  constructor(props) {
    super(props);
    this.state = { value: "", filter: "", topic: "" };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleBoolChange = this.handleBoolChange.bind(this);
  }

  //When "Search" is clicked, search the location with the searchLocation function props.
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.filter && this.state.value) {
      this.props.searchLocation(
        this.state.value,
        this.state.filter,
        this.state.topic
      );

      //if the select box hasn't been changed, search with the filter horseriding by default.
    } else if (this.state.value) {
      this.setState({ filter: "horseriding" });
      this.props.searchLocation(
        this.state.value,
        "horseriding",
        "horse_riding"
      );
    }

    //If there isn't a location entered by the option menu changed, search by the currently loaded location
    if (!this.state.value) {
      this.props.searchCurrentLocation(
        this.state.value,
        "horseriding",
        this.state.topic
      );
    }
  };

  //set the state of the value when the search text is changed.
  handleTermChange(event) {
    this.setState({ value: event.target.value });
  }



  // assign a search query for the yelp api call.
  handleFilterChange(selection) {
    this.setState({ filter: selection }, function(c) {
      selection === "horseriding"
        ? this.setState({ topic: "horse_riding" })
        : selection === "horse_board"
          ? this.setState({ topic: "horse_board" })
          : selection === "horseracing"
            ? this.setState({ topic: "horse_racing" })
            : selection === "horsequipment"
              ? this.setState({ topic: "tack" })
              : selection === "petphotography"
                ? this.setState({ topic: "photography" })
                : selection === "farriers"
                  ? this.setState({ topic: "horse_farrier" })
                  : selection === "vets"
                    ? this.setState({ topic: "vet" })
                    : this.setState({ topic: "horse_riding" });
    });
  }

  handleBoolChange(){
    this.props.updateBool("location")
  }

//Loads the search bar.
  render() {
  const {isLocationError} = this.props;
    return (
      <div>
      {isLocationError &&
      <div aria-hidden={isLocationError} className="location-modal">
      <div aria-labelledby="error" aria-describedby="invalid-input" className="location-modal-content"><h3 id="error">ERROR</h3>
      <p id="invalid-input" className="invalid-input">{"You have entered an invalid location. Please try again using a differen location."}</p>
      <button className="invalid-input-button" onClick={this.handleBoolChange}>Close</button>
      </div></div>
    }
      <form onSubmit={this.handleSubmit} className="search-container">
        <div className="search-wrapper">
          <input
            onChange={this.handleTermChange}
            type="text"
            placeholder="Enter Location"
            aria-label="location"
          />
        </div>

        <div className="filter-options">
          <select
            aria-label="search topic"
            value={this.state.filter}
            onChange={event => {
              this.handleFilterChange(event.target.value);
            }}
          >
            <option tabIndex="-1" value="horseriding">Horse Riding</option>
            <option tabIndex="-1" value="horse_board">Horse Boarding</option>
            <option tabIndex="-1" value="horseracing">Horse Racing</option>
            <option tabIndex="-1"  value="horsequipment">Horse Equipment</option>
            <option tabIndex="-1" value="petphotography">Pet Photography</option>
            <option tabIndex="-1" value="farriers">Farrier</option>
            <option tabIndex="-1" value="vets">Veterinarian</option>
          </select>
        </div>

        <div className="buttons-wrapper">
          <button className="search-button">Search</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Search;

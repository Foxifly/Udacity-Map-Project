import React, { Component } from "react";

class Search extends Component {

  //needed to bind these functions or else this will be undefined. 
  constructor(props) {
    super(props);
    this.state = { value: "", filter: "", topic: "" };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
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

//Loads the search bar.
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-container">
        <div className="search-wrapper">
          <input
            onChange={this.handleTermChange}
            type="text"
            placeholder="Enter Location"
          />
        </div>

        <div className="filter-options">
          <select
            value={this.state.filter}
            onChange={event => {
              this.handleFilterChange(event.target.value);
            }}
          >
            <option value="horseriding">Horse Riding</option>
            <option value="horse_board">Horse Boarding</option>
            <option value="horseracing">Horse Racing</option>
            <option value="horsequipment">Horse Equipment</option>
            <option value="petphotography">Pet Photography</option>
            <option value="farriers">Farrier</option>
            <option value="vets">Veterinarian</option>
          </select>
        </div>

        <div className="buttons-wrapper">
          <button className="search-button">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;

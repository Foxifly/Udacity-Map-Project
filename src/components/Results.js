import React, { Component } from "react";
import Business from "./Business";
import PropTypes from "prop-types";

class Results extends Component {
  //Only prop required here is the result array.
  static propTypes = {
    results: PropTypes.array.isRequired
  };

  render() {
    const { results, handleCurrBusiness} = this.props;
    //Displays the result grid
    return (
      <div className="results">
        <h3> Results</h3>
        <div className="result-container">
          <ol className="result-grid">
            {!results && <p>Loading Results...</p>}

            {results === "Error" && (
              <p> Could not fetch Yelp API. Please try again later.</p>
            )}
            {results &&
              results !== "Error" &&
              results.map(result => {
                return <Business key={result.id} business={result} handleCurrBusiness={handleCurrBusiness} />;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Results;

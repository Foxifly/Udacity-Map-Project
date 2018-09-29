import React, { Component } from "react";
import Business from "./Business";
import PropTypes from "prop-types";

/**
 * @description displays all of the results from a search.
 */
class Results extends Component {
  constructor(props) {
    super(props);
    this.handleBoolChange = this.handleBoolChange.bind(this);
  }

  /**
   * @description Declaring the required props for this component.
   */
  static propTypes = {
    results: PropTypes.array.isRequired
  };

  /**
   * @description When "close" is clicked on the modal, close the modal.
   */
  handleBoolChange(){
    this.props.updateBool("yelp")
  }

  render() {
    const { results, handleCurrBusiness, isYelpError} = this.props;
    //Displays the result grid
    return (
      <div aria-labelledby="result-container" className="results">
        <h3 aria-describedby="result-info" id="result-header"> Results</h3>
        <div id="result-info" className="result-container">
          <ol className="result-grid">
            {!results && <p>Loading Results...</p>}

            {isYelpError &&
              <div className="location-modal">
              <div className="location-modal-content"><h3>ERROR</h3>
              <p className="invalid-input">We are having trouble accessing the Yelp API. Please try again later.</p>
              <button autofocus="true" className="invalid-input-button" onClick={this.handleBoolChange}> Close</button>
              </div></div>
            }

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

import React, { Component } from 'react';
import Business from './Business';

class Results extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/

  render () {
      const {results} = this.props;
  return (

    <div className="results">
    <h3> Results</h3>
    <div className="result-container">
    <ol className="result-grid">
    {!results && <p>Loading Results...</p>}
    {results === "Error" &&
    <p> Could not fetch Yelp API. Please try again later.</p>}
      {results && results !== "Error" && results.map(result => {

        return (
          <Business
            key={result.id}
            business={result}
          />
        );

      })}
    </ol>


    </div>
    </div>

  )

  }

}

export default Results;

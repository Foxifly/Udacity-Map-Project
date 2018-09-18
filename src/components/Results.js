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
      {results.map(result => {

        return (
          <Business
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

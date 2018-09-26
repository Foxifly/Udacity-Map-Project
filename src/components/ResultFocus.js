import React, { Component } from 'react';
//This component will display on a specific business screen. (once one is selected)
class ResultFocus extends Component {


  render () {
      const { latitude, longitude, results } = this.props;
  return (
    <div className="app">
    RESULT
    </div>

  )

  }

}

export default ResultFocus;

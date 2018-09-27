import React, { Component } from 'react';
//This component will display on a specific business screen. (once one is selected)
class ResultFocus extends Component {


  render () {
      const { resultClicked } = this.props;
  return (
    <div className="app">
    {JSON.stringify(resultClicked)}
    </div>

  )

  }

}

export default ResultFocus;

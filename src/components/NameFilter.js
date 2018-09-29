import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";

class NameFilter extends Component {

  /**
   * @description needed to bind handletermchange or else this will be undefined.
   */
  constructor(props) {
    super(props);
    this.state = { value: "", filtered: false, oldResults: [], results: [] };
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  /**
   * @description Waits for the props of the component to update, when it updates, then set the state.
   * @param nextProps The next props taht are passed when the component updates.
   */
  componentWillUpdate(nextProps) {
    if (this.state.filtered) {
      if (nextProps.results !== this.props.results) {
          this.setState({
            results: nextProps.results
          });
      }
    } else  {
      if (nextProps.results !== this.props.results) {
          this.setState({
            oldResults: nextProps.results
          });
      }
    }
  }

  /**
   * @description The filter function for the names of the horse locations.
   */
  handleTermChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value) {
      const match = new RegExp(escapeRegExp(this.state.value), "i"); //ignore case and escape characters
    this.setState({
      filtered: true,
      results: this.state.oldResults.filter(result => {
        return match.test(result.name);
    })
  }, function(c) {
    this.props.filterUpdateResults(this.state.results)
  })
    } else {
      this.setState({
        results: this.state.oldResults,
        filtered: false
      }, function(c) {
        this.props.filterUpdateResults(this.state.results)
      })
    }
  }

/**
 * @description Loads the Name filter bar. 
 */
  render() {
    return (
      <div className="search-container">
        <div className="search-wrapper">
          <input
            onChange={this.handleTermChange}
            type="text"
            placeholder="Filter Results By Name"
            aria-label="Filter by name"
          />
        </div>
      </div>
    );
  }
}

export default NameFilter;

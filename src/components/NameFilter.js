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
   * @description When "Search" is clicked, search the location with the searchLocation function props.
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
 * @description Loads the search bar.
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

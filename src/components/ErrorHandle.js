import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorHandle extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static propTypes = {
    whereError: PropTypes.string.isRequired
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
  const { whereError } = this.props;
    if (this.state.hasError) {
      return (
      <div aria-hidden={!this.state.hasError} className="location-modal">
      <div aria-labelledby="error" aria-describedby="invalid-input" className="location-modal-content"><h3 id="error">ERROR</h3>
      <p id="invalid-input" className="invalid-input">{`There was an error loading ${whereError}. Please try again later.`}</p>
      <button className="invalid-input-button" onClick={this.handleBoolChange}>Close</button>
      </div></div>
    );
    }
    return this.props.children;
  }
}

export default ErrorHandle;

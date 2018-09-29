import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
 * @description Watches for errors in the children components.
 */
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
  }

  render() {
  const { whereError } = this.props;
    if (this.state.hasError) {
      return (
      <div aria-hidden={!this.state.hasError} className="location-modal">
      <div aria-labelledby="error" aria-describedby="invalid-input" className="location-modal-content"><h3 id="error">ERROR</h3>
      <p id="invalid-input" className="invalid-input">{`There was an error loading ${whereError}. Please reload the page or try again later.`}</p>
      </div></div>
    );
    }
    return this.props.children;
  }
}

export default ErrorHandle;

import React, { Component } from "react";
import notFound from "../icons/Image_Not_Found.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Business extends Component {
  /**
   * @description The component's constructor that binds the click events and manages state.
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      currBusiness: []
    };
    this.handleResult = this.handleResult.bind(this);
  }

  /**
   * @description Declares the PropTypes of this component.
   */
  static propTypes = {
    business: PropTypes.object.isRequired,
    handleCurrBusiness: PropTypes.func.isRequired
  };

  /**
   * @description When the "more info" button is clicked, this function manages the staate and updates the current business on the map markers
   */
  handleResult() {
    this.setState({
      currBusiness: this.props.business
    });
    this.props.handleCurrBusiness(this.props.business);
  }

  /**
   * @description The render method that takes the business data from the Yelp API and generates a info box for each business. If the Business has a yelp image that isn't defined, this block also replaces that image with a placeholder. Yelp does not have anything listed as undefined, only empty strings.
   */
  render() {
    const { business } = this.props;

    let url;
    if (business.image_url) {
      url = business.image_url;
    } else {
      url = notFound;
    }

    return (
      <li aria-labelledby="business-name" className="business">
        <h4 aria-describedby="business-info" id="business-name"> {business.name}</h4>

        <div role="figure" aria-label={business.name} aria-describedby={business.name}
          className="bus-image-container"
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${url})`,
            backgroundSize: "cover"
          }}
        />

        <div aria-label="address" aria-describedby="business-address" id="business-info" className="business-info">
          <p id="business-address">{business.location.address1}</p>
          <p id="business-address">{business.location.address2}</p>
          <p id="business-address">{business.location.address3}</p>
          <p id="business-address">
            {business.location.city}, {business.location.state}{" "}
            {business.location.zip_code}
          </p>
        </div>

        <div aria-describedby="info-link" className="button-container">
          <Link role="button" aria-label="more info" onClick={this.handleResult} to="/info" className="more-info" id="info-link">
            More Info
          </Link>
        </div>

      </li>
    );
  }
}

export default Business;

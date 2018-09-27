import React, { Component } from "react";
import notFound from "../icons/Image_Not_Found.jpg";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currBusiness: []
    }
    this.handleResult = this.handleResult.bind(this);
  }
  //Declaring the proptypes of the Business Component.
  static propTypes = {
    business: PropTypes.object.isRequired
  };

  handleResult() {
    this.setState({
      currBusiness: this.props.business
    })
    this.props.handleCurrBusiness(this.props.business)
  }

  //The render method that takes the business data from the Yelp API and generates a info box for each business. If the Business has a yelp image that isn't defined, this block also replaces that image with a placeholder. Yelp does not have anything listed as undefined, only empty strings.
  render() {
    const { business } = this.props;
    let url;
    if (business.image_url) {
      url = business.image_url;
    } else {
      url = notFound;
    }
    return (
      <li className="business">
        <h4> {business.name}</h4>
        <div
          className="bus-image-container"
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${url})`,
            backgroundSize: "cover"
          }}
        />
        <div className="business-info">
          <p>{business.location.address1}</p>
          <p>{business.location.address2}</p>
          <p>{business.location.address3}</p>
          <p>
            {business.location.city}, {business.location.state}{" "}
            {business.location.zip_code}
          </p>
        </div>
        <div className="button-container">
        <Link onClick={this.handleResult} to="/info"
        className="more-info"
        >More Info</Link>
        </div>
      </li>
    );
  }
}

export default Business;

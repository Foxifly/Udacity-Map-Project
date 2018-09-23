import React, { Component } from "react";
import notFound from "../icons/Image_Not_Found.jpg";
import PropTypes from "prop-types";

class Business extends Component {
  //Declaring the proptypes of the Business Component.
  static propTypes = {
    business: PropTypes.object.isRequired
  };

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
          <button className="more-info">More Info</button>
        </div>
      </li>
    );
  }
}

export default Business;

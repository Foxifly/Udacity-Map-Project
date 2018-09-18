import React, { Component } from 'react';


class Business extends Component {
  /*static propTypes = {
    horseRiding: PropTypes.array.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  };*/

  render () {
    const {business} = this.props;
  return (
    <li className="business">
    {console.log(business)}
    <h3> {business.name}</h3>
    <div
      className="bus-image-container"
      style={{
        width: 200,
        height: 200,
        backgroundImage: `url(${business.image_url})`,
        backgroundSize: 'cover'
      }}
    />
    <div className="business-info">
    <p>{business.location.address1}</p>
    <p>{business.location.address2}</p>
    <p>{business.location.address3}</p>
    <p>{business.location.city}, {business.location.state} {business.location.zip_code}</p>
    </div>
    <div class="button-container">
    <button class="more-info">More Info</button>
    </div>
    </li>

  )

  }

}

export default Business;

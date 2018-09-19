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
    <h4> {business.name}</h4>
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
    <div className="button-container">
    <button className="more-info">More Info</button>
    </div>
    </li>

  )

  }

}

export default Business;

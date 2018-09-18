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
    <div className="business">
    {console.log(business)}
    <h3> {business.name}</h3>
    <img src={business.image_url}/>
    <p>{business.display_phone}</p>
    <p>{business.location.address1}</p>
    <p>{business.location.address2}</p>
    <p>{business.location.address3}</p>
    <p>{business.location.city}</p>
    <p>{business.location.zip_code}</p>



    </div>

  )

  }

}

export default Business;

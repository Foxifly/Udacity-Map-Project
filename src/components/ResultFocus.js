import React, { Component } from 'react';
import notFound from "../icons/Image_Not_Found.jpg";
//This component will display on a specific business screen. (once one is selected)
class ResultFocus extends Component {
  state = {
    idClicked: null
  }

//Monitors the state on every prop update. if they differ, this will force the map to update to the lat and long / results.
componentWillUpdate(nextProps) {
  if (nextProps !== this.props && this.props.resultClicked) {
    this.setState({
      idClicked: nextProps.resultClicked.id
    });

  }
}
  render () {

      const { resultClicked } = this.props;
      let url;
      if (resultClicked.image_url) {
        url = resultClicked.image_url;
      } else {
        url = notFound;
      }
        return (
          <div className="result-featured">
          {resultClicked && resultClicked.location &&
            <div className="result-featured-container">
            <div className="result-featured-image">
            <img alt={resultClicked.name} className="shrink-image" src={url}></img>
            </div>
            <div className="result-featured-text">
            <h3>{resultClicked.name}</h3>
            <p>{resultClicked.location.address1}</p>
            <p>{resultClicked.location.address2}</p>
            <p>{resultClicked.location.address3}</p>
            <p>{resultClicked.location.city}, {resultClicked.location.state} {resultClicked.location.zip_code}</p>
            <p>Rating: {resultClicked.rating}</p>
            <p>{resultClicked.display_phone}</p>
            <div className="button-container">
            <a className="yelp-button" target="_blank" href={resultClicked.url}>View on Yelp</a></div>
            </div>
            </div>
          }

        </div>


        )
      }


  }



export default ResultFocus;

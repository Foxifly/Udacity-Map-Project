import React, { Component } from "react";
import notFound from "../icons/Image_Not_Found.jpg";

/**
 * @description This component will display on a specific business screen. (once one is selected)
 */
class ResultFocus extends Component {
  state = {
    idClicked: null
  };

  /**
   * @description Monitors the state on every prop update. if they differ, this will force the map to update to the lat and long / results.
   * @param nextProps The next props passed once the component updates
   */
  componentWillUpdate(nextProps) {
    if (nextProps !== this.props && this.props.resultClicked) {
      this.setState({
        idClicked: nextProps.resultClicked.id
      });
    }
  }

  /**
   * @description Renders the clicked on venue with more info and an enlarged image.
   * @returns {HTML} Returns the featured result component
   */
  render() {
    const { resultClicked } = this.props;
    let url;
    if (resultClicked.image_url) {
      url = resultClicked.image_url;
    } else {
      url = notFound;
    }

    return (
      <div aria-labelledby="result-name" aria-describedby="result-text" className="result-featured">
        {resultClicked &&
          resultClicked.location && (
            <div className="result-featured-container">
              <div className="result-featured-image">
                <img
                  alt={resultClicked.name}
                  className="shrink-image"
                  src={url}
                />
              </div>
              <div id="result-text" aria-labelledby="result-name" className="result-featured-text">
                <h3 id="result-name" aria-describedby="result-text">{resultClicked.name}</h3>
                <p aria-label="address">{resultClicked.location.address1}</p>
                <p aria-label="address">{resultClicked.location.address2}</p>
                <p aria-label="address">{resultClicked.location.address3}</p>
                <p>
                  {resultClicked.location.city}, {resultClicked.location.state}{" "}
                  {resultClicked.location.zip_code}
                </p>
                <p>Rating: {resultClicked.rating}</p>
                <p aria-label="phone number">{resultClicked.display_phone}</p>
                <div role="button" className="button-container">
                  <a
                    autoFocus={true}
                    className="yelp-button"
                    target="_blank"
                    href={resultClicked.url}
                  >
                    View on Yelp
                  </a>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default ResultFocus;

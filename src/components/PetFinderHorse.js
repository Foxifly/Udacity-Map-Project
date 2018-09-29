import React, { Component } from "react";
import PropTypes from "prop-types";

class PetFinderHorse extends Component {
  /**
   * @description randHorse prop is the only thing required to generate the horse profile.
   */
  static propTypes = {
    randHorse: PropTypes.object.isRequired
  };

  /**
   * @description Displays the Opt to Adopt section of the main page.
   * @returns {HTML} Returns a random horse for adoption.
   */
  render() {
    const { randHorse } = this.props;
    let breedString = "";
    let horseImage = "";

    /**
     * @description If there are more than one horse breed, then they will all be listed.
     */
    if (
      randHorse &&
      randHorse.breeds &&
      randHorse.breeds.breed &&
      Array.isArray(randHorse.breeds.breed)
    ) {
      randHorse.breeds.breed.map(breed => {
        return (breedString += breed.$t + ", ");
      });
    }

    let description = "";
    if (
      randHorse &&
      randHorse.description &&
      randHorse.description.$t &&
      randHorse.description.$t.length > 20
    ) {
      description = randHorse.description.$t;
    } else if (
      randHorse &&
      randHorse.description &&
      randHorse.description.$t &&
      randHorse.description.$t.length <= 20
    ) {
      description =
        "No description is available for this horse for adoption. Please contact the rescue for more information.";
    } else if (!randHorse || !randHorse.description) {
      description = "Loading PetFinder horse for adoption...";
    }

    /**
     * @description Each object ruturns multiple images, this grabs an image from the larger filetypes, and displays it.
     */
    if (
      randHorse &&
      randHorse.media &&
      randHorse.media.photos &&
      randHorse.media.photos.photo &&
      Array.isArray(randHorse.media.photos.photo)
    ) {
      //React doesn't like me trying to get the @size property of the returned json object.
      for (let i = 0; i < randHorse.media.photos.photo.length; i++) {
        if (Object.values(randHorse.media.photos.photo[i])[0] === "x") {
          horseImage = randHorse.media.photos.photo[i].$t;
          break;
        }
      }
    }

    /**
     * @description The opt to adopt container - displays a random horse up for adoption
     */
    return (
      <div className="rand-horse-wrapper">
        <div className="rand-horse-container">
          {randHorse &&
            randHorse.name && (
              <div aria-labelledby="opt-heading" className="adopt-heading">
                <h3 id="opt-heading" aria-describedby="rand-name">OPT TO ADOPT</h3>
                <h4 id="rand-name" aria-labelledby="opt-heading">{randHorse.name.$t}</h4>
              </div>
            )}

          <div aria-describedby="rand-name" aria-labelledby="opt-heading" className="horse-finder-image-container">
            {horseImage && (
              <img alt="PetFinder horse for adoption" src={horseImage} />
            )}
          </div>

          <div className="general-horse-info">
            {randHorse && randHorse.age && <p>Age Group: {randHorse.age.$t}</p>}

            {randHorse && randHorse.sex && <p>Gender: {randHorse.sex.$t}</p>}

            {breedString && <p>Breeds: {breedString}</p>}

            {randHorse &&
              randHorse.breeds &&
              !breedString &&
              randHorse.breeds &&
              randHorse.breeds.breed && (
                <p>Breed: {randHorse.breeds.breed.$t}</p>
              )}
          </div>

          <div aria-describedby="description" className="description-container">
            {description && <p id="description">{description}</p>}
          </div>

          <div className="contact-container">
            {randHorse &&
              randHorse.contact &&
              randHorse.contact.phone.$t && <p aria-label="contact info">{randHorse.contact.phone.$t}</p>}

            {randHorse &&
              randHorse.contact &&
              randHorse.contact.email.$t && <p aria-label="contact info">{randHorse.contact.email.$t}</p>}

            {randHorse &&
              randHorse.contact &&
              randHorse.contact.city.$t &&
              randHorse.contact.state.$t && (
                <p aria-label="contact info">
                  {randHorse.contact.city.$t}, {randHorse.contact.state.$t}
                </p>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default PetFinderHorse;

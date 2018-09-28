import React, { Component } from "react";
import PropTypes from "prop-types";


class PetFinderHorse extends Component {

  //randHorse prop is the only thing required to generate the horse profile.
  static propTypes = {
    randHorse: PropTypes.object.isRequired
  };

  render() {
    const { randHorse } = this.props;
    let breedString = "";
    let horseImage = "";

    //If there are more than one horse breed, then they will all be listed.
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
    let description="";

    if (randHorse && randHorse.description && randHorse.description.$t.length > 10) {
      description = randHorse.description.$t;
    } else if (randHorse && randHorse.description && randHorse.description.$t.length <= 10) {
      description = "No description is available for this horse for adoption. Please contact the rescue for more information."
    } else if (!randHorse.description) {
        description = "Loading PetFinder horse for adoption..."
    }

    //Each object ruturns multiple images, this grabs an image from the larger filetypes, and displays it.
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

    //The opt to adopt container - displays a random horse up for adoption
    return (
      <div className="rand-horse-wrapper">
        <div className="rand-horse-container">
          {randHorse &&
            randHorse.name && (
              <div className="adopt-heading">
                <h3>OPT TO ADOPT</h3>
                <h4>{randHorse.name.$t}</h4>
              </div>
            )}

          <div className="horse-finder-image-container">
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

          <div className="description-container">
            {description &&
                <p>{description}</p>}
          </div>

          <div className="contact-container">
            {randHorse &&
              randHorse.contact &&
              randHorse.contact.phone.$t && (
                <p>{randHorse.contact.phone.$t}</p>
              )}

            {randHorse &&
              randHorse.contact &&
              randHorse.contact.email.$t && (
                <p>{randHorse.contact.email.$t}</p>
              )}

            {randHorse &&
              randHorse.contact &&
              randHorse.contact.city.$t &&
              randHorse.contact.state.$t && (
                <p>
                  {randHorse.contact.city.$t},{" "}
                  {randHorse.contact.state.$t}
                </p>
              )}

          </div>
        </div>
      </div>
    );
  }
}

export default PetFinderHorse;

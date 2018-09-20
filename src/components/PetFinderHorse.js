import React, { Component } from "react";

class PetFinderHorse extends Component {
  render() {
    const { randHorse } = this.props;
    let breedString = "";
    let horseImage = "";
    console.log(randHorse);

    if (randHorse && randHorse.breeds && randHorse.breeds.breed && Array.isArray(randHorse.breeds.breed)) {
      randHorse.breeds.breed.map(breed => {
        breedString += breed.$t + ", ";
      });
    }
    if ( randHorse &&
      randHorse.media && randHorse.media.photos &&
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

    return (

      <div className="rand-horse-wrapper">
      <div className="rand-horse-container">
        {randHorse && randHorse.name && (
          <div className="adopt-heading">
            <h3>OPT TO ADOPT</h3>
            <h4>{randHorse.name.$t}</h4>
          </div>
        )}

          <div className="horse-finder-image-container">
            {horseImage && (

                <img src={horseImage} />

            )}
          </div>
          <div className="general-horse-info">
            {randHorse && randHorse.age && <p>Age Group: {randHorse.age.$t}</p>}

            {randHorse && randHorse.sex && <p>Gender: {randHorse.sex.$t}</p>}
            {breedString && <p>Breeds: {breedString}</p>}

            {!breedString &&
              randHorse.breeds &&
              randHorse.breeds.breed && (
                <p>Breed: {randHorse.breeds.breed.$t}</p>
              )}
          </div>

          <div className="description-container">
            {randHorse.description && (
               <p>Description: {randHorse.description.$t}</p>
            )}
          </div>
          <div className="contact-container">
            {randHorse && randHorse.contact &&
              randHorse.contact.phone.$t && (

                  <p>Phone: {randHorse.contact.phone.$t}</p>

              )}

            {randHorse && randHorse.contact &&
              randHorse.contact.email.$t && (

                  <p>Email: {randHorse.contact.email.$t}</p>

              )}

            {randHorse && randHorse.contact &&
              randHorse.contact.city.$t &&
              randHorse.contact.state.$t && (

                  <p>
                    Location: {randHorse.contact.city.$t},{" "}
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

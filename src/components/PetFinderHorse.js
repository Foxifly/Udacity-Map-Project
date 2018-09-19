import React, { Component } from "react";

class PetFinderHorse extends Component {
  render() {
    const { randHorse } = this.props;
    let breedString = "";
    let horseImage = "";
    console.log(randHorse);

    if (randHorse.breeds && Array.isArray(randHorse.breeds.breed)) {
      randHorse.breeds.breed.map(breed => {
        breedString += breed.$t + ", ";
      });
    }
    if (
      randHorse.media &&
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
      <div className="rand-horse-container">
        {randHorse.name && (
          <div className="adopt-heading">
            <h3>OPT TO ADOPT</h3>
            <h4>{randHorse.name.$t}</h4>
          </div>
        )}
        <ul>
          <div className="horse-image-container">
            {horseImage && (
              <li>
                <img src={horseImage} />
              </li>
            )}
          </div>
          <div clasnName="general-horse-info">
            {randHorse.age && <li>Age Group: {randHorse.age.$t}</li>}

            {randHorse.sex && <li>Gender: {randHorse.sex.$t}</li>}
            {breedString && <li>Breeds: {breedString}</li>}

            {!breedString &&
              randHorse.breeds &&
              randHorse.breeds.breed && (
                <li>Breed: {randHorse.breeds.breed.$t}</li>
              )}
          </div>

          <div className="description-container">
            {randHorse.description && (
              <li> Description: {randHorse.description.$t}</li>
            )}
          </div>
          <div className="contact-container">
            {randHorse.contact &&
              randHorse.contact.phone.$t && (
                <li>
                  <p>Contact Phone: {randHorse.contact.phone.$t}</p>
                </li>
              )}

            {randHorse.contact &&
              randHorse.contact.email.$t && (
                <li>
                  <p>Contact Email: {randHorse.contact.email.$t}</p>
                </li>
              )}

            {randHorse.contact &&
              randHorse.contact.city.$t &&
              randHorse.contact.state.$t && (
                <li>
                  <p>
                    Location: {randHorse.contact.city.$t},{" "}
                    {randHorse.contact.state.$t}
                  </p>
                </li>
              )}
          </div>
        </ul>
      </div>
    );
  }
}

export default PetFinderHorse;

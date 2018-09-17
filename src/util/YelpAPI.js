/*const clientID = "88w4KGQN0rVPZRB-GA0yqQ";*/
const apiKey = "ATnd3ceNsAj19UrKAdE8lrr6APLKlFInjXX5mw1F1mL0Ulx590FOsgk9Ja9i5HQ_LYyYeljukwUftHfcE8lJnqXUaLlGmgEw7SFJPUG3bRtwqL2wWm1EWJxGDuMNW3Yx";

const headers = {
  'Authorization': `Bearer ${apiKey}`
}

//Yelp API search
//GET https://api.yelp.com/v3/businesses/search

export const search = (term, category, latitude, longitude, sort) => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&categories=${category}&sort_by=${sort}`, { headers } )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return business;
          });
        }
      }).catch((err)=> {
        console.log(err);
      });
    }

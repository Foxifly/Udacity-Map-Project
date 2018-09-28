export const searchForLocation = (searchText) => {
      return fetch(`https://geocoder.api.here.com/6.2/geocode.json?searchtext=${searchText}&app_id=t2LirmzV5Tq880xCEPgU&app_code=_IIofEzhGCyxC8morJZnyw&gen=9`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        let latitude  = jsonResponse.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
        let longitude = jsonResponse.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
        return {latitude, longitude};
      }).catch((err)=> {
        return "Error"
      });
    }

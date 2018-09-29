/*API Key
eee3449ed9801f899fac01b648671706

API Secret
f3d89aacaef5e6c2b1adaf0cedc22d8b*/
const petAPIkey = "eee3449ed9801f899fac01b648671706"

//http://api.petfinder.com/my.method?format=json&key=12345&callback=?


//searches a random horse from petfinder for adoption
export const petRandom = () => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.petfinder.com/pet.getRandom?format=json&key=${petAPIkey}&output=full&animal=horse`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.petfinder) {

          return jsonResponse.petfinder.pet;
        }
      }).catch((err)=> {
        return "Error";
      });
    }

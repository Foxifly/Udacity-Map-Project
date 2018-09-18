import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search-container">
      <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter Location"
      />
      </div>
      <div className="buttons-wrapper">
      <button className="search-button">Search</button>
      </div>

      <div className="filter-options">
      <select>
      <option value="horseRiding">Horse Riding</option>
        <option value="horseBoarding">Horse Boarding</option>
        <option value="horseRacing">Horse Racing</option>
        <option value="horseEquipment">Horse Equipment</option>
        <option value="petPhotography">Pet Photography</option>
        <option value="farrier">Farrier</option>
        <option value="vet">Veterinarian</option>
      </select>
      </div>

      </div>
    )
  }
}


export default Search;

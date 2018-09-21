import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", filter: "" };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.filter && this.state.value) {
        this.props.searchLocation(this.state.value, this.state.filter);
    } else if (this.state.value) {
      this.setState({filter: "horseriding"});
      this.props.searchLocation(this.state.value, "horseriding");
    }

  };
  handleTermChange(event) {
    this.setState({ value: event.target.value });
  }
  handleFilterChange(selection) {
    this.setState({ filter: selection});
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} className="search-container">
        <div className="search-wrapper">
          <input
            onChange={this.handleTermChange}
            type="text"
            placeholder="Enter Location"
          />
        </div>

        <div className="filter-options">
          <select
          value={this.state.filter}
          onChange={event => {
            //passes back into App.js to move the book from one shelf to another
            //FUNCTION THAT UPDATES YELP CALL
            //Sets the state as the new value of where the book is at now
            this.handleFilterChange(event.target.value)}}>
            <option value="horseriding">Horse Riding</option>
            <option value="horse_board">Horse Boarding</option>
            <option value="horseracing">Horse Racing</option>
            <option value="horseequipment">Horse Equipment</option>
            <option value="petphotography">Pet Photography</option>
            <option value="farrier">Farrier</option>
            <option value="vets">Veterinarian</option>
          </select>
        </div>

        <div className="buttons-wrapper">
          <button className="search-button">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;

/*import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './utils/ImageInput';
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, {hash:true});
    console.log(values);
    if (this.props.onCreateContact) {
    this.props.onCreateContact(values);
    }

  }

  render() {
    return(
      <div>
      <Link to="/" className="close-create-contact">Close</Link>
      <form onSubmit={this.handleSubmit} className="create-contact-form">
      <ImageInput className="create-contact-avatar-input"
      name="avatarURL"
      maxHeight={64}/>
      <div className="create-contact-details">
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="email" placeholder="Email"/>
      <button>Add Contact</button>
      </div>
      </form>
      </div>
    )
  }
}


export default CreateContact
*/

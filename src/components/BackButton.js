import React, { Component } from "react";
import {Link} from 'react-router-dom';

class BackButton extends Component {

  render() {
  return(  <Link to="/" className="go-back">
    </Link>
  )
  }
}

export default BackButton;

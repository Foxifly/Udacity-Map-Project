import React from "react";
import { Link } from "react-router-dom";

/**
 * @description Stateless component that displays the "Go back" button on the /info page.
 * @returns {HTML} The Go Back button that links back to the main page.
 */
function BackButton(props) {
  return <Link to="/" className="go-back" role="button" aria-label="Go Back" />;
}

export default BackButton;

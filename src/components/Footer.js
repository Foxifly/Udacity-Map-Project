import React from "react";

/**
 * @description Stateless Footer displays the footer at the bottom of the page.
 * @returns {HTML} Returns the HTML for the footer element. 
 */
function Footer(props) {
  return (
    <footer aria-describedby="footer-text" className="footer">
      <p id="footer-text">
        {" "}
        Powered by{" "}
        <a
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.google.com"
        >
          Google Maps
        </a>,{" "}
        <a
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://yelp.com"
        >
          Yelp
        </a>, and{" "}
        <a
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://petfinder.com"
        >
          PetFinder
        </a>. <br /> Copyright 2018 | Lindsay Ciastko{" "}
      </p>{" "}
    </footer>
  );
}

export default Footer;

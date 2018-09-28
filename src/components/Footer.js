import React from "react";

//Stateless component - Main heading. Spreadable across all pages. No props, state, etc.
function Footer(props) {
  return (
    <footer className="footer">
      <p>
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

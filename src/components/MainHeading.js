import React from "react";

/**
 * @description Stateless component that displays the main "Spur of the moment" text.
 * @returns {HTML} Returns the HTML for the spur of the moment top banner.
 */
function MainHeading(props) {
  return (
    <div
    tab-index="0"
    role="banner"
    aria-describedby="title"
    id="main-header"
    className="main-header"
    >

    <h1
    aria-describedby="sub-title"
    id="title">
    {"SPUR OF THE MOMENT"}
    </h1>

    <h2
    aria-labelledby="title"
    id="sub-title">
    {"A horse care application"}
    </h2>
    </div>
  );
}

export default MainHeading;

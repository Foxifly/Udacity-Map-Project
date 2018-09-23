import React from "react";

//Stateless component - Main heading. Spreadable across all pages. No props, state, etc.
function MainHeading(props) {
  return (
    <div className="main-header">
      <h1>SPUR OF THE MOMENT</h1>
      <h2>A horse care application</h2>
    </div>
  );
}

export default MainHeading;

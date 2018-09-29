import React from "react";

//Stateless component - Main heading. Spreadable across all pages. No props, state, etc.
function MainHeading(props) {
  return (
    <div aria-describedby="title" id="main-header" className="main-header">
      <h1 aria-describedby="sub-title" id="title">SPUR OF THE MOMENT</h1>
      <h2 aria-labeledby="title" id="sub-title">A horse care application</h2>
    </div>
  );
}

export default MainHeading;
